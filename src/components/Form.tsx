'use client';

import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [society, setSociety] = useState("");
  const [societyDes, setSocietyDes] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [message, setMessage] = useState("");
  const [cb1, setCb1] = useState(false);
  const [cb2, setCb2] = useState(false);
  const [cb3, setCb3] = useState(false);
  const [cb4, setCb4] = useState(false);
  const [rgpd, setRgpd] = useState(false); 
  
const onSubmit = (e) => {
  e.preventDefault(); // << ça bloque le reload de page
    console.log('Data :', {
      name,
      email,
      phone,
      website,
      society,
      societyDes,
      budget,
      deadline,
      message,
      prestations: {
        cb1,
        cb2,
        cb3,
        cb4,
      },
      rgpd
    });
  }

  return (
    <div>
      <div className="contact">
        <form onSubmit={onSubmit} id="contactForm">
          <div className="row-contact">
            <input value={name}
              onChange={e => setName(e.target.value)}
              type="text" id="name" placeholder="Nom Prénom" name="name" required />
          </div>

          <div className="row-contact">
            <input value={email}
              onChange={e => setEmail(e.target.value)}
              type="text" id="email" placeholder="Email" name="email" required />
            <input value={phone}
              onChange={e => setPhone(e.target.value)}
              type="text" id="phone" placeholder="Téléphone" name="phone" required />
            <input value={website}
              onChange={e => setWebsite(e.target.value)}
              type="text" id="website" placeholder="Site web" name="website" />
          </div>

          <br /><br />

          <div className="row-contact flex-column drop">
            <label htmlFor="society">Vous êtes :</label>
            <select value={society}
              onChange={e => setSociety(e.target.value)}
              name="society" id="society" required>
              <option value="">-- Sélectionner --</option>
              <option value="societe">Société</option>
              <option value="organisation">Organisation</option>
              <option value="particulier">Particulier</option>
            </select>
          </div>

          <div className="row-contact">
            <textarea value={societyDes}
              onChange={e => setSocietyDes(e.target.value)}
              name="society-des" id="society-des"
              placeholder="Description de votre entreprise"
              rows={3} cols={30} required></textarea>
          </div>

          <br /><br />

          <div className="row-contact flex-column">
            <label htmlFor="budget">Budget</label>
            <select value={budget}
              onChange={e => setBudget(e.target.value)}
              name="budget" id="budget" required>
              <option value="">-- Choisir une tranche --</option>
              <option value="budgetlow">Moins de 500 €</option>
              <option value="budgetmid">Entre 500 € et 2000 €</option>
              <option value="budgethigh">Plus de 2000 €</option>
            </select>

            <label htmlFor="deadline">Deadline</label>
            <input value={deadline}
              onChange={e => setDeadline(e.target.value)}
              type="date" id="deadline" name="deadline" required />
          </div>

          <div className="row-contact flex-column justify-content-between">
            <label>Options qui vous intéressent :</label>
            <div className="prestations">
              <input type="checkbox" id="cb1" checked={cb1} onChange={e => setCb1(e.target.checked)} />
              <label htmlFor="cb1">Plan 1</label>

              <input type="checkbox" id="cb2" checked={cb2} onChange={e => setCb2(e.target.checked)} />
              <label htmlFor="cb2">Plan 2</label>

              <input type="checkbox" id="cb3" checked={cb3} onChange={e => setCb3(e.target.checked)} />
              <label htmlFor="cb3">Plan 3</label>

              <input type="checkbox" id="cb4" checked={cb4} onChange={e => setCb4(e.target.checked)} />
              <label htmlFor="cb4">À la carte</label>
            </div>
          </div>

          <div className="row-contact">
            <textarea value={message}
              onChange={e => setMessage(e.target.value)}
              id="message" placeholder="Votre projet" rows={5} cols={30} required></textarea>
          </div>

          <div className="box-rgpd">
            <input type="checkbox" id="rgpd" name="rgpd"
              checked={rgpd}
              onChange={e => setRgpd(e.target.checked)}
              required />
            <label htmlFor="rgpd">J'accepte la politique RGPD</label>
          </div>

          <div className="button-submit">
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  );
}
