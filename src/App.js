import React from 'react';
import './App.css';
import Menu from './components/Menu.js';
import ContentHeader from './components/ContentHeader';
import InfoFormSection from './components/ContentInfoForm';
import BarraSeparadadora from './components/BarraSeparadora';

function App() {

  return (
    <div className="App">
      <header>
        <Menu />
        <ContentHeader
          description="La vida que sueñas"
          description2="frente al "
          description3="Mar Caribe"
        />
        <InfoFormSection 
          tituloprincipal="Obtén tu apartamento de playa. Aprovecha el lanzamiento de la torre Estrella del Mar"
          tituloprincipal2="Déjanos tus datos y recibe un acompañamiento profesional en tu inversión."
        />
        <BarraSeparadadora
          idrutaanclamenu="zonascomunes"
          nombreseccion="ZONAS COMUNES" 
        />
      </header>
    </div>
  );
}

export default App;
