import * as React from 'react'
import { useRef } from 'react'
import '../css/main.css'
import emailjs from 'emailjs-com'

const Form = () => {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_c6e6yu9', 'template_b6bihs1', form.current, 'FoTsIY5ktOI03ZuvY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
    };

    return (
        <div>
            <h2>Zakažite razgovor sa nama</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-div">
                    <input type="text" placeholder="Ime" name="name" id="name" />
                    <input type="mail" placeholder="E-mail" name="mail" id="mail" />
                    <input type="text" placeholder="Broj telefona" name="number" id="number" />
                </div>
                <div className="form-div">
                    <textarea name="message" id="message" cols="30" rows="5" placeholder="Poruka"></textarea>
                </div>
                <input class="button" type="submit" value="Pošalji" />
            </form>
        </div>
    )
}

export default Form;