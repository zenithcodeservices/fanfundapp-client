
const NestedLayout = ({ children }) => (
    <div className="overflow-x-hidden min-h-screen flex flex-col justify-between">

      <div>

        <main>
          <p>Test</p>
          {children}
        </main>
      </div>

    </div>
)

export default NestedLayout
