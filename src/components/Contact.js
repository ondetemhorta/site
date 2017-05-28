import React from 'react'

import Input from './utils/Input'
import TextArea from './utils/TextArea'
import Button from './utils/Button'

const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <h2 className="title">Entre em contato</h2>
      <p className="subtitle">Possui alguma dúvida ou sugestão? Envie para a gente, iremos avaliar com carinho sua contribuição.</p>

      <form className="form" action="">
        <h3 className="description">Tire suas dúvidas, de sugestões</h3>

        <Input label="Seu nome" name="name" color="green" type="text" />
        <Input label="E seu email, por favor" name="email" color="green" type="email" />
        <TextArea label="Qual sua dúvida ou sugestão?" name="message" color="green" />
        <Button color="green" text="Enviar" />
      </form>

      <div className="socials">
        <h3 className="description">Nossas redes sociais</h3>

        <a className="social fa fa-facebook" href=""></a>
        <a className="social fa fa-github" href=""></a>
      </div>
    </div>
  </section>
)

export default Contact
