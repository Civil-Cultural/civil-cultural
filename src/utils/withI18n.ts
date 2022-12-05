/* ----------- RESOURCES ----------- */

import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

/**
 * This is a wrapper to add page translation
 */
export function withI18n<T = any>(fn?: GetStaticProps<T & { [key: string]: any; }>) {
  return async (
    ctx: GetStaticPropsContext
  ): Promise<GetStaticPropsResult<T & SSRConfig | SSRConfig>> => {
    const i18nProps = await serverSideTranslations(ctx.locale as string, ["common"]);

    
    if(fn) {
        const fnResult = await fn(ctx) as any

        return {
            ...fnResult,
            props: {
                ...fnResult.props,
                ...i18nProps
            }
        };
    }

    return {
        props: {
            ...i18nProps
        }
    };
  };
}
