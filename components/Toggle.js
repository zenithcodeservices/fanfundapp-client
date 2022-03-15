import { Switch } from '@headlessui/react'

function Toggle({ enabled, setEnabled }) {  

  return (
    <div className="py-6 text-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-palette-dark" : "bg-palette-primary"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">toggle monthly and annual plans</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  )
}

export default Toggle
