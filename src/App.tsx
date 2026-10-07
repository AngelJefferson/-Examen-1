// Autor: Angel Jefferson Sanchez Ventura - Matrícula: 2021-1816
import { useState, useEffect } from 'react';
import { IonApp, IonContent, setupIonicReact } from '@ionic/react';
import { Capacitor } from '@capacitor/core';
import { StatusBar } from '@capacitor/status-bar';
import '@ionic/react/css/core.css';
import './App.css';

import Perfil from './vistas/Perfil';
import Tabla from './vistas/Tabla';
import Cuadratica from './vistas/Cuadratica';

setupIonicReact();

function App() {
  const [vista, setVista] = useState('perfil');

  // Evita que la app se dibuje debajo de la barra de estado
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: false });
    }
  }, []);

  return (
    <IonApp>
      <IonContent className="ion-padding">

        <div className="menu">
          <button className={vista === 'perfil' ? 'activo' : ''} onClick={() => setVista('perfil')}>Perfil</button>
          <button className={vista === 'tabla' ? 'activo' : ''} onClick={() => setVista('tabla')}>Tabla</button>
          <button className={vista === 'cuadratica' ? 'activo' : ''} onClick={() => setVista('cuadratica')}>Fórmula</button>
        </div>

        {vista === 'perfil' && <Perfil />}
        {vista === 'tabla' && <Tabla />}
        {vista === 'cuadratica' && <Cuadratica />}

      </IonContent>
    </IonApp>
  );
}

export default App;