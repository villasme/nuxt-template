type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace business {}
}

declare namespace API {
  export namespace business {
    /**
     * LYC-型号
     */
    export namespace bearingLyc {
      /**
       * delete
       * /business/admin/bearingLyc/delete/{id}
       */
      export namespace remove {
        export class Params {
          /** id */
          id: any;
        }

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * list
       * /business/admin/bearingLyc/list
       */
      export namespace list {
        export class Params {
          /** list */
          list?: any;
          /** page */
          page?: any;
          /** size */
          size?: any;
          /** total */
          total?: any;
        }

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * save
       * /business/admin/bearingLyc/save
       */
      export namespace save {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }
    }

    /**
     * 大章
     */
    export namespace chapter {
      /**
       * delete
       * /business/admin/chapter/delete/{id}
       */
      export namespace remove {
        export class Params {
          /** id */
          id: any;
        }

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * list
       * /business/admin/chapter/list
       */
      export namespace list {
        export class Params {
          /** page */
          page: any;
          /** size */
          size: any;
        }

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * save
       * /business/admin/chapter/save
       */
      export namespace save {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }
    }

    /**
     * 课程
     */
    export namespace course {
      /**
       * delete
       * /business/admin/course/delete/{id}
       */
      export namespace remove {
        export class Params {
          /** id */
          id: any;
        }

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * list
       * /business/admin/course/list
       */
      export namespace list {
        export class Params {
          /** page */
          page: any;
          /** size */
          size: any;
        }

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * save
       * /business/admin/course/save
       */
      export namespace save {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }
    }

    /**
     * 小节
     */
    export namespace section {
      /**
       * delete
       * /business/admin/section/delete/{id}
       */
      export namespace remove {
        export class Params {
          /** id */
          id: any;
        }

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * list
       * /business/admin/section/list
       */
      export namespace list {
        export class Params {
          /** list */
          list?: any;
          /** page */
          page?: any;
          /** size */
          size?: any;
          /** total */
          total?: any;
        }

        export type Response = any;

        export const init: Response;

        export function request(
          params: Params,
          options?: any,
        ): Promise<Response>;
      }

      /**
       * save
       * /business/admin/section/save
       */
      export namespace save {
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
