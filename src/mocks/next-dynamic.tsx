import React from 'react'

export default function dynamic<T>(
  loader: () => Promise<React.ComponentType<T>>,
  options?: { ssr?: boolean; loading?: () => React.ReactNode }
) {
  return function DynamicComponent(props: any) {
    const [Comp, setComp] = React.useState<React.ComponentType<any> | null>(null);

    React.useEffect(() => {
      loader().then((mod: any) => {
        // Handle ES modules default exports
        const component = mod.default || mod;
        setComp(() => component);
      }).catch((err) => {
        console.error("Failed to dynamically load component:", err);
      });
    }, []);

    if (!Comp) {
      return options?.loading ? React.createElement(React.Fragment, null, options.loading()) : React.createElement("div");
    }
    return React.createElement(Comp, props);
  }
}
