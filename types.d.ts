export {};

declare global {
    type FuseWikiDataType = {
        title: string;
        url: string;
        content: string[];
    };
}
