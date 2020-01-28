package org.openapitools.codegen.languages;

import org.openapitools.codegen.*;
import io.swagger.models.properties.ArrayProperty;
import io.swagger.models.properties.MapProperty;
import io.swagger.models.properties.Property;
import io.swagger.models.parameters.Parameter;

import java.io.File;
import java.util.*;

import org.apache.commons.lang3.StringUtils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TypescriptKoaServerCodegen extends AbstractTypeScriptServerCodegen implements CodegenConfig {
    public static final String PROJECT_NAME = "projectName";

    static Logger LOGGER = LoggerFactory.getLogger(TypescriptKoaServerCodegen.class);

    public CodegenType getTag() {
        return CodegenType.SERVER;
    }

    public String getName() {
        return "typescript-koa";
    }

    public String getHelp() {
        return "Generates a typescript-koa server.";
    }

    public TypescriptKoaServerCodegen() {
        super();

        outputFolder = "generated-code" + File.separator + "typescript-koa";
        modelTemplateFiles.put("Model.mustache", ".ts");
        apiTemplateFiles.put("ApiHandler.mustache", ".ts");
        supportingFiles.add(new SupportingFile("Api.mustache", getIndexDirectory(), "Api.ts"));
        supportingFiles.add(new SupportingFile("Routes.mustache", getIndexDirectory(), "Routes.ts"));
        supportingFiles.add(new SupportingFile("RequestBodies.mustache", getIndexDirectory(), "RequestBodies.ts"));
        supportingFiles.add(new SupportingFile("DummyHandler.mustache", getIndexDirectory(), "DummyHandler.ts"));
        supportingFiles.add(new SupportingFile("package.mustache", getPackageRootDirectory(), "package.json"));
        supportingFiles.add(new SupportingFile("tsconfig.mustache", getPackageRootDirectory(), "tsconfig.json"));
        embeddedTemplateDir = templateDir = "typescript-koa-server";
        apiPackage = File.separator + "handlers";
        modelPackage = File.separator + "models";
        supportingFiles.add(new SupportingFile("README.mustache", "", "README.md"));
        // TODO: Fill this out.
    }

    @Override
    public Map<String, Object> postProcessOperationsWithModels(Map<String, Object> objs, List<Object> allModels) {
        Map<String, Object> operations = (Map<String, Object>) objs.get("operations");
        List<CodegenOperation> ops = (List<CodegenOperation>) operations.get("operation");
        for (CodegenOperation operation : ops) {
            operation.vendorExtensions.put("koaRoutingPath", operation.path
                    .replace("{", ":")
                    .replace("}", ""));
            operation.vendorExtensions.put("lowercaseHttpMethod", operation.httpMethod
                    .toLowerCase());
//            operation.vendorExtensions.put("parameters", operation.                    .toLowerCase());
        }


        return objs;
    }

    private String getIndexDirectory() {
        String indexPackage = modelPackage.substring(0, Math.max(0, modelPackage.lastIndexOf('.')));
        return indexPackage.replace('.', File.separatorChar);
    }

    private String getPackageRootDirectory() {
        String indexPackage = modelPackage.substring(0, Math.max(0, modelPackage.lastIndexOf('.')));
        return indexPackage.replace('.', File.separatorChar);
    }
}
