import { Transition, Disclosure } from '@headlessui/react'
import { PlusIcon, MinusIcon } from '@heroicons/react/solid'

function Accordion({ question, answer }) {
  return (
    <div className="w-full max-w-xl p-2 mx-auto bg-gray rounded-2xl">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button 
              className="flex justify-between w-full px-6 py-3 text-sm sm:text-lg font-semibold font-secondary 
              text-left text-black bg-palette-primary rounded-lg hover:bg-palette-dark hover:text-black 
              focus:outline-none focus-visible:ring focus-visible:ring-palette-light focus-visible:ring-opacity-75">
              <span>{question}</span>
              {open ?
                <MinusIcon
                  className="w-5 h-5 text-black"
                />
                :
                <PlusIcon
                  className="w-5 h-5 text-black"
                />
              }
            </Disclosure.Button>
            <Transition
              as='div'
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white font-normal text-sm sm:text-base">
                {answer}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default Accordion
