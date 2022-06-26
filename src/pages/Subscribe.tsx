import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation createSubscriber($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
  }
}
`

export function Subscribe(){
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, {loading}] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  async function handleSubscribe(event: FormEvent){
    event.preventDefault()

    console.log(name, email)

    await createSubscriber({
      variables:{
        name,
        email,
      }
    })

    navigate('/event')
  }

  return(
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] sm:flex items-center justify-between mt-5 sm:mt-20 mx-auto">
        <div className="max-w-[640px] ">
          <div className=" flex items-center sm:justify-start justify-center">
            <Logo />
          </div>
          <h2 className="sm:mt-8 p-5 text-[30px] sm:text-5xl sm:p-0 leading-tight text-center sm:text-left">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
            </h2>
            <p className="sm:mt-4 text-gray-200 p-5 sm:p-0 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
            </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
          <form className="flex flex-col gap-2 w-full">
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="text" 
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)} 
            />
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="text" 
              placeholder="Digite seu email"
              onChange={event => setEmail(event.target.value)} 
            />
          </form>
          <button
            disabled={loading}
            onClick={handleSubscribe}
            type="submit"
            className="mt-4 bg-green-500 uppercase py-4 px-16 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            Garantir minha vaga
          </button>
        </div>
      </div>
      <img src="/src/assets/code-mockup.png" className="mt-10" />
    </div>
  )
}