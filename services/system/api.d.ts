type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace system {}
}

declare namespace API {
  export namespace system {
    /**
     * 系统管理-特色同时
     */
    export namespace test {
      /**
       * test
       * /system/test
       */
      export namespace test {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * test
       * /system/test
       */
      export namespace putTest {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * test
       * /system/test
       */
      export namespace postTest {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * test
       * /system/test
       */
      export namespace deleteTest {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * test
       * /system/test
       */
      export namespace optionsTest {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * test
       * /system/test
       */
      export namespace headTest {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * test
       * /system/test
       */
      export namespace patchTest {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * test
       * /system/test
       */
      export namespace traceTest {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }
    }
  }
}
