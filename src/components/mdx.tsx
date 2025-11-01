import { useMDXComponent } from "@content-collections/mdx/react";
import { cn } from "@/lib/utils";

const components = {
	code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<code
			className={cn(
				"not-data-language:bg-prose-code-bg not-data-language:text-prose-code not-data-language:rounded not-data-language:p-1 relative",
				className,
			)}
			{...props}
		/>
	),
	Callout: ({
		className,
		type,
		icon,
		children,
		...props
	}: React.HTMLAttributes<HTMLElement> & {
		type?: "default" | "warning" | "danger";
		icon: string;
		children: React.ReactNode;
	}) => (
		<div
			className={cn("my-6 flex items-start rounded-md border border-l-4 p-4", {
				"border-red-900 bg-red-50": type === "danger",
				"border-yellow-900 bg-yellow-50": type === "warning",
			})}
			{...props}
		>
			{icon && <span className="mr-4 text-2xl">{icon}</span>}
			<div>{children}</div>
		</div>
	),
};

export default function Mdx({ code }: { code: string }) {
	const Component = useMDXComponent(code);

	return <Component components={components} />;
}
