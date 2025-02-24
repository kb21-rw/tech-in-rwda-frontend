const CodeText = ({ children }: any) => (
  <div className="bg-gray-700 text-white p-4 w-full lg:w-1/2 overflow-x-auto">
    <pre className="whitespace-pre-wrap">
      <code>{children}</code>
    </pre>
  </div>
);

export default CodeText;
