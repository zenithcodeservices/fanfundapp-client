import PageTitle from '../components/PageTitle'

function LoginHeader({ toggleIsSigningIn, header, question, cta }) {
  return (
    <div className="w-5/6 mx-auto font-secondary">
      <PageTitle text={header} />
      <div className="w-full p-2 rounded flex justify-center space-x-2">
        <p className=" text-white">{question}</p>
        <button
          className="text-palette-primary hover:text-palette-dark font-semibold rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-palette-primary focus-visible:ring-offset-2"
          onClick={toggleIsSigningIn}
        >
          {cta}
        </button>
      </div>
    </div>
  )
}

export default LoginHeader