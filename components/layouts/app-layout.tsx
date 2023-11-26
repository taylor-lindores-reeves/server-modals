import React, { PropsWithChildren } from "react";

export const Layout = (props: PropsWithChildren) => {
	return <div className="py-6 container mx-auto">{props.children}</div>;
};
