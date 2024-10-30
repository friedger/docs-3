import type { MDXComponents } from "mdx/types";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Callout } from "@/components/callout";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import defaultComponents from "fumadocs-ui/mdx";
import type { ReactNode } from "react";
import { Popup, PopupContent, PopupTrigger } from "fumadocs-ui/twoslash/popup";
import { docskit } from "@/components/docskit/components";
import { CustomTable, TableProps } from "@/components/table";

const shortcuts: Record<string, string> = {
  stacks: "./content/docs/stacks/props.ts",
  ordinals: "./content/docs/bitcoin/props.ts",
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    Popup,
    PopupContent,
    PopupTrigger,
    Tabs,
    Tab,
    Callout,
    TypeTable,
    Accordion,
    Accordions,
    InstallTabs: ({
      items,
      children,
    }: {
      items: string[];
      children: ReactNode;
    }) => (
      <Tabs items={items} id="package-manager">
        {children}
      </Tabs>
    ),
    table: (props: TableProps) => <CustomTable {...props} />,
    blockquote: (props) => <Callout>{props.children}</Callout>,
    ...components,
    ...docskit,
  };
}
