package org.openapitools.codegen.typescript.koa;

import org.openapitools.codegen.AbstractOptionsTest;
import org.openapitools.codegen.CodegenConfig;
import org.openapitools.codegen.languages.TypescriptKoaServerCodegen;
import org.openapitools.codegen.options.TypescriptKoaServerCodegenOptionsProvider;

import mockit.Expectations;
import mockit.Tested;

public class TypescriptKoaServerCodegenOptionsTest extends AbstractOptionsTest {

    @Tested
    private TypescriptKoaServerCodegen codegen;

    public TypescriptKoaServerCodegenOptionsTest() {
        super(new TypescriptKoaServerCodegenOptionsProvider());
    }

    @Override
    protected CodegenConfig getCodegenConfig() {
        return codegen;
    }

    @SuppressWarnings("unused")
    @Override
    protected void setExpectations() {
        // TODO: Complete options
        new Expectations(codegen) {{

        }};
    }
}

