export namespace APIResponse {
    export class Type {
        prefix?: string;
        id?: number;
        name?: string;
    }

    export class Author {
        id?: number;
        name?: string;
    }

    export class Service {
        id?: number;
        name?: string;
    }

    export class Status {
        id?: number;
        name?: string;
    }

    export class Data {
        id?: number;
        type?: Type;
        number?: string;
        summary?: string;
        isPrivate?: boolean;
        author?: Author;
        service?: Service;
        status?: Status;
        updatedOn?: string;
        createdOn?: string;
        nextReviewOn?: Date;
}

export class Entity {
    data?: Data;
    name?: string;
}

export class Link {
    name?: string;
    displayName?: string;
    href?: string;
}

export class Item {
    entity?: Entity;
    links?: Link[];
}

export class Collection {
    items?: Item[];
}

export class KnowledgeItemResponse {
    collection?: Collection;
    links?: any[];
    forms?: any[];
}

export class XOption {
    value?: number;
    text?: string;
}

export class Field {
    name?: string;
    displayName?: string;
    type?: string;
    ['x-options']?: XOption[];
}
export class Fieldset {
    displayName?: string;
    fields?: Field[];
}

export class Form {
    name?: string;
    displayName?: string;
    fieldsets?: Fieldset[];
}

export class KnowledgeFormResponse {
    forms?: Form[];
}

}