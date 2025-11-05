declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"about": {
"about.md": {
	id: "about.md";
  slug: "about";
  body: string;
  collection: "about";
  data: any
} & { render(): Render[".md"] };
};
"certificates": {
"90_CrashCoursePython.md": {
	id: "90_CrashCoursePython.md";
  slug: "90_crashcoursepython";
  body: string;
  collection: "certificates";
  data: InferEntrySchema<"certificates">
} & { render(): Render[".md"] };
"91_SeleniumWithPython.md": {
	id: "91_SeleniumWithPython.md";
  slug: "91_seleniumwithpython";
  body: string;
  collection: "certificates";
  data: InferEntrySchema<"certificates">
} & { render(): Render[".md"] };
"92_Playwright.md": {
	id: "92_Playwright.md";
  slug: "92_playwright";
  body: string;
  collection: "certificates";
  data: InferEntrySchema<"certificates">
} & { render(): Render[".md"] };
"93_JMeter.md": {
	id: "93_JMeter.md";
  slug: "93_jmeter";
  body: string;
  collection: "certificates";
  data: InferEntrySchema<"certificates">
} & { render(): Render[".md"] };
"94_SeleniumJava.md": {
	id: "94_SeleniumJava.md";
  slug: "94_seleniumjava";
  body: string;
  collection: "certificates";
  data: InferEntrySchema<"certificates">
} & { render(): Render[".md"] };
"95_RestAssured.md": {
	id: "95_RestAssured.md";
  slug: "95_restassured";
  body: string;
  collection: "certificates";
  data: InferEntrySchema<"certificates">
} & { render(): Render[".md"] };
"96_FundamentalsWebDevelopment.md": {
	id: "96_FundamentalsWebDevelopment.md";
  slug: "96_fundamentalswebdevelopment";
  body: string;
  collection: "certificates";
  data: InferEntrySchema<"certificates">
} & { render(): Render[".md"] };
"97_ScrumFoundation.md": {
	id: "97_ScrumFoundation.md";
  slug: "97_scrumfoundation";
  body: string;
  collection: "certificates";
  data: InferEntrySchema<"certificates">
} & { render(): Render[".md"] };
"98_JavaScript.md": {
	id: "98_JavaScript.md";
  slug: "98_javascript";
  body: string;
  collection: "certificates";
  data: InferEntrySchema<"certificates">
} & { render(): Render[".md"] };
"99_SQLServer.md": {
	id: "99_SQLServer.md";
  slug: "99_sqlserver";
  body: string;
  collection: "certificates";
  data: InferEntrySchema<"certificates">
} & { render(): Render[".md"] };
};
"contact": {
"email.md": {
	id: "email.md";
  slug: "email";
  body: string;
  collection: "contact";
  data: InferEntrySchema<"contact">
} & { render(): Render[".md"] };
"github.md": {
	id: "github.md";
  slug: "github";
  body: string;
  collection: "contact";
  data: InferEntrySchema<"contact">
} & { render(): Render[".md"] };
"linkedin.md": {
	id: "linkedin.md";
  slug: "linkedin";
  body: string;
  collection: "contact";
  data: InferEntrySchema<"contact">
} & { render(): Render[".md"] };
"whatsapp.md": {
	id: "whatsapp.md";
  slug: "whatsapp";
  body: string;
  collection: "contact";
  data: InferEntrySchema<"contact">
} & { render(): Render[".md"] };
};
"customers": {
"customers.md": {
	id: "customers.md";
  slug: "customers";
  body: string;
  collection: "customers";
  data: InferEntrySchema<"customers">
} & { render(): Render[".md"] };
};
"projects": {
"1_ApexCore.md": {
	id: "1_ApexCore.md";
  slug: "1_apexcore";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"2_ChivoWallet.md": {
	id: "2_ChivoWallet.md";
  slug: "2_chivowallet";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"3_Cap.md": {
	id: "3_Cap.md";
  slug: "3_cap";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"4_CignaMedical.md": {
	id: "4_CignaMedical.md";
  slug: "4_cignamedical";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"5_AmericaMobile.md": {
	id: "5_AmericaMobile.md";
  slug: "5_americamobile";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
};
"studies": {
"studie1.md": {
	id: "studie1.md";
  slug: "studie1";
  body: string;
  collection: "studies";
  data: InferEntrySchema<"studies">
} & { render(): Render[".md"] };
};
"work": {
"work1.md": {
	id: "work1.md";
  slug: "work1";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"work2.md": {
	id: "work2.md";
  slug: "work2";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"work3.md": {
	id: "work3.md";
  slug: "work3";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
