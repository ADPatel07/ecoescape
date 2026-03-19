import { useEffect } from "react";

/**
 * SchemaInjector Component
 *
 * Dynamically injects JSON-LD structured data schemas into the document head.
 * This component doesn't render any visible content.
 *
 * @example
 * ```tsx
 * <SchemaInjector schemas={[articleSchema, breadcrumbSchema]} />
 * ```
 */
interface SchemaInjectorProps {
  schemas: Array<{ "@type": string; [key: string]: any }>;
}

export function SchemaInjector({ schemas }: SchemaInjectorProps) {
  useEffect(() => {
    // Create script elements for each schema
    const scriptElements: HTMLScriptElement[] = [];

    schemas.forEach((schema) => {
      // Check if a script with this type already exists
      const existingScript = document.querySelector(
        `script[type="application/ld+json"][data-schema-type="${schema["@type"]}"]`
      );

      // If it exists, remove it to avoid duplicates
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      script.setAttribute("data-schema-type", schema["@type"]);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    // Cleanup: remove scripts when component unmounts
    return () => {
      scriptElements.forEach((script) => {
        script.remove();
      });
    };
  }, [schemas]);

  return null;
}

/**
 * Helper component to inject a single schema
 */
interface SingleSchemaInjectorProps {
  schema: { "@type": string; [key: string]: any };
}

export function SingleSchemaInjector({ schema }: SingleSchemaInjectorProps) {
  return <SchemaInjector schemas={[schema]} />;
}

export default SchemaInjector;
