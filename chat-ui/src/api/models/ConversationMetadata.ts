/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Metadata about a conversation conversation.
 */
export type ConversationMetadata = {
    id: string;
    name: string;
    system_prompt_id?: (string | null);
    model?: string;
    max_tokens?: number;
    message_count?: number;
    tags?: Array<string>;
    created_at?: string;
    updated_at?: string;
};

