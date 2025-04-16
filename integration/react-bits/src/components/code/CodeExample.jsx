import { getLanguage } from "../../utils/utils";
import CodeHighlighter from "./CodeHighlighter";
import { CodeOptions, CSSTab, TailwindTab, TSCSSTab, TSTailwindTab } from "./CodeOptions";

const CodeExample = ({ codeObject }) => {
  return (
    <>
      {Object.entries(codeObject).map(([key, codeString]) => {
        if (['tailwind', 'css', 'tsTailwind', 'tsCode', 'cliDefault', 'cliTailwind', 'cliTsTailwind', 'cliTsDefault'].includes(key)) return null;

        return key === 'code' || key === 'tsCode' ? (
          <div key={codeString}>
            <h2 className="demo-title">{key}</h2>
            <CodeOptions key={codeString}>
              {/* JavaScript Tailwind Code */}
              <TailwindTab>
                <CodeHighlighter language="jsx" codeString={codeObject.tailwind} />
              </TailwindTab>

              {/* JavaScript Default CSS Code */}
              <CSSTab>
                <CodeHighlighter language="jsx" codeString={codeObject.code} />
                {codeObject.css && (
                  <>
                    <h2 className="demo-title">CSS</h2>
                    <CodeHighlighter language="css" codeString={codeObject.css} />
                  </>
                )}
              </CSSTab>

              {/* TypeScript Tailwind Code */}
              {codeObject.tsTailwind && (
                <TSTailwindTab>
                  <CodeHighlighter language="tsx" codeString={codeObject.tsTailwind} />
                </TSTailwindTab>
              )}

              {/* TypeScript Default CSS Code */}
              {codeObject.tsCode && (
                <TSCSSTab>
                  <CodeHighlighter language="tsx" codeString={codeObject.tsCode} />
                  {codeObject.css && (
                    <>
                      <h2 className="demo-title">CSS</h2>
                      <CodeHighlighter language="css" codeString={codeObject.css} />
                    </>
                  )}
                </TSCSSTab>
              )}
            </CodeOptions>
          </div>
        ) : (
          <div key={codeString}>
            <h2 className="demo-title">{key}</h2>
            <CodeHighlighter language={getLanguage(key)} codeString={codeString} />
          </div>
        );
      })}
    </>
  );
};

export default CodeExample;
