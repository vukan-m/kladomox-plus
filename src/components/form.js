import * as React from 'react'
import '../css/main.css'

const Form = () => {
    return (
        <div>
            <h2>Zakažite razgovor sa nama</h2>
            <form action="mailto:vukan.mirkovic@gmail.com">
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