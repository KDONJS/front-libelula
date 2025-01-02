import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  fifa: string;
  flag: string;
}

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent{

  paises = [
    { name: 'Argentina', fifa: 'ARG', flag: 'https://flagcdn.com/w320/ar.png' },
    { name: 'Brasil', fifa: 'BRA', flag: 'https://flagcdn.com/w320/br.png' },
    { name: 'Canadá', fifa: 'CAN', flag: 'https://flagcdn.com/w320/ca.png' },
    { name: 'Chile', fifa: 'CHI', flag: 'https://flagcdn.com/w320/cl.png' },
    { name: 'Colombia', fifa: 'COL', flag: 'https://flagcdn.com/w320/co.png' },
    { name: 'México', fifa: 'MEX', flag: 'https://flagcdn.com/w320/mx.png' },
    { name: 'Perú', fifa: 'PER', flag: 'https://flagcdn.com/w320/pe.png' },
    { name: 'Estados Unidos', fifa: 'USA', flag: 'https://flagcdn.com/w320/us.png' },
    { name: 'Venezuela', fifa: 'VEN', flag: 'https://flagcdn.com/w320/ve.png' },
    { name: 'Uruguay', fifa: 'URU', flag: 'https://flagcdn.com/w320/uy.png' },
    { name: 'Paraguay', fifa: 'PAR', flag: 'https://flagcdn.com/w320/py.png' },
    { name: 'Bolivia', fifa: 'BOL', flag: 'https://flagcdn.com/w320/bo.png' },
    { name: 'Ecuador', fifa: 'ECU', flag: 'https://flagcdn.com/w320/ec.png' },
    { name: 'Costa Rica', fifa: 'CRC', flag: 'https://flagcdn.com/w320/cr.png' },
    { name: 'Panamá', fifa: 'PAN', flag: 'https://flagcdn.com/w320/pa.png' },
    { name: 'Honduras', fifa: 'HON', flag: 'https://flagcdn.com/w320/hn.png' },
    { name: 'El Salvador', fifa: 'SLV', flag: 'https://flagcdn.com/w320/sv.png' },
    { name: 'Guatemala', fifa: 'GUA', flag: 'https://flagcdn.com/w320/gt.png' },
    { name: 'Jamaica', fifa: 'JAM', flag: 'https://flagcdn.com/w320/jm.png' },
    { name: 'Trinidad y Tobago', fifa: 'TRI', flag: 'https://flagcdn.com/w320/tt.png' },

    // Europa
    { name: 'Alemania', fifa: 'GER', flag: 'https://flagcdn.com/w320/de.png' },
    { name: 'España', fifa: 'ESP', flag: 'https://flagcdn.com/w320/es.png' },
    { name: 'Francia', fifa: 'FRA', flag: 'https://flagcdn.com/w320/fr.png' },
    { name: 'Italia', fifa: 'ITA', flag: 'https://flagcdn.com/w320/it.png' },
    { name: 'Países Bajos', fifa: 'NED', flag: 'https://flagcdn.com/w320/nl.png' },
    { name: 'Portugal', fifa: 'POR', flag: 'https://flagcdn.com/w320/pt.png' },
    { name: 'Reino Unido', fifa: 'GBR', flag: 'https://flagcdn.com/w320/gb.png' },
    { name: 'Rusia', fifa: 'RUS', flag: 'https://flagcdn.com/w320/ru.png' },
    { name: 'Bélgica', fifa: 'BEL', flag: 'https://flagcdn.com/w320/be.png' },
    { name: 'Suiza', fifa: 'SUI', flag: 'https://flagcdn.com/w320/ch.png' },
    { name: 'Suecia', fifa: 'SWE', flag: 'https://flagcdn.com/w320/se.png' },
    { name: 'Dinamarca', fifa: 'DEN', flag: 'https://flagcdn.com/w320/dk.png' },
    { name: 'Noruega', fifa: 'NOR', flag: 'https://flagcdn.com/w320/no.png' },
    { name: 'Finlandia', fifa: 'FIN', flag: 'https://flagcdn.com/w320/fi.png' },
    { name: 'Austria', fifa: 'AUT', flag: 'https://flagcdn.com/w320/at.png' },
    { name: 'Grecia', fifa: 'GRE', flag: 'https://flagcdn.com/w320/gr.png' },
    { name: 'Polonia', fifa: 'POL', flag: 'https://flagcdn.com/w320/pl.png' },
    { name: 'República Checa', fifa: 'CZE', flag: 'https://flagcdn.com/w320/cz.png' },
    { name: 'Hungría', fifa: 'HUN', flag: 'https://flagcdn.com/w320/hu.png' },
    { name: 'Croacia', fifa: 'CRO', flag: 'https://flagcdn.com/w320/hr.png' },

    // Asia
    { name: 'China', fifa: 'CHN', flag: 'https://flagcdn.com/w320/cn.png' },
    { name: 'India', fifa: 'IND', flag: 'https://flagcdn.com/w320/in.png' },
    { name: 'Japón', fifa: 'JPN', flag: 'https://flagcdn.com/w320/jp.png' },
    { name: 'Corea del Sur', fifa: 'KOR', flag: 'https://flagcdn.com/w320/kr.png' },
    { name: 'Arabia Saudita', fifa: 'KSA', flag: 'https://flagcdn.com/w320/sa.png' },
    { name: 'Turquía', fifa: 'TUR', flag: 'https://flagcdn.com/w320/tr.png' },
    { name: 'Irán', fifa: 'IRN', flag: 'https://flagcdn.com/w320/ir.png' },
    { name: 'Israel', fifa: 'ISR', flag: 'https://flagcdn.com/w320/il.png' },
    { name: 'Emiratos Árabes Unidos', fifa: 'UAE', flag: 'https://flagcdn.com/w320/ae.png' },
    { name: 'Qatar', fifa: 'QAT', flag: 'https://flagcdn.com/w320/qa.png' },
    { name: 'Líbano', fifa: 'LIB', flag: 'https://flagcdn.com/w320/lb.png' },
    { name: 'Siria', fifa: 'SYR', flag: 'https://flagcdn.com/w320/sy.png' }
  ];

}
