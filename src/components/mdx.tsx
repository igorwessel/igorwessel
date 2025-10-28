import { useMDXComponent } from "@content-collections/mdx/react";

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return <Component />;
}
