import React from "react";
import "./ManualParallax.css";
import "animate.css";
import "../SectionComponent/Papito";
import { Papito } from "../SectionComponent/Papito";
import { Temas } from "../data/Temas";

export function ManualParallax() {
  return (
    <div>
      <div className="bgimg-1 ">
        <div className="caption animate__animated ">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h2 class="animate-charcter border1">Geek Proffesor</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {Temas.filter((elemento) => {
        return elemento.tipo == "t";
      }).map((elemento) => {
        return <Papito key={elemento.imagen} {...elemento} />;
      })}
      {/* <div className="bgimg-2">
        <div className="caption">
          <div class="cardBox">
            <div class="card">
              <h2>Apuntes de Mates</h2>

              <div class="contenido">
                <h3>Mates</h3>
                <p>Los mejores apuntos de matemáticas que encontraras</p>
              </div>
            </div>
          </div>
          <span className="border">Sapere Aude</span>
        </div>
      </div> */}

      <div className="bgimg-3">
        <div className="caption" class="animate__animated animate__bounce">
          <span className="border">RM</span>
        </div>
      </div>

      {/* ."-,.__
                 `.     `.  ,
              .--'  .._,'"-' `.
             .    .'         `'
             `.   /          ,'
               `  '--.   ,-"'
                `"`   |  \
                   -. \, |
                    `--Y.'      ___.
                         \     L._, \
               _.,        `.   <  <\                _
             ,' '           `, `.   | \            ( `
          ../, `.            `  |    .\`.           \ \_
         ,' ,..  .           _.,'    ||\l            )  '".
        , ,'   \           ,'.-.`-._,'  |           .  _._`.
      ,' /      \ \        `' ' `--/   | \          / /   ..\
    .'  /        \ .         |\__ - _ ,'` `        / /     `.`.
    |  '          ..         `-...-"  |  `-'      / /        . `.
    | /           |L__           |    |          / /          `. `.
   , /            .   .          |    |         / /             ` `
  / /          ,. ,`._ `-_       |    |  _   ,-' /               ` \
 / .           \"`_/. `-_ \_,.  ,'    +-' `-'  _,        ..,-.    \`.
.  '         .-f    ,'   `    '.       \__.---'     _   .'   '     \ \
' /          `.'    l     .' /          \..      ,_|/   `.  ,'`     L`
|'      _.-""` `.    \ _,'  `            \ `.___`.'"`-.  , |   |    | \
||    ,'      `. `.   '       _,...._        `  |    `/ '  |   '     .|
||  ,'          `. ;.,.---' ,'       `.   `.. `-'  .-' /_ .'    ;_   ||
|| '              V      / /           `   | `   ,'   ,' '.    !  `. ||
||/            _,-------7 '              . |  `-'    l         /    `||
. |          ,' .-   ,' ||               | .-.        `.      .'     ||
 `'        ,'    `".'    |               |    `.        '. -.'       `'
          /      ,'      |               |,'    \-.._,.'/'
          .     /        .               .       \    .''
        .`.    |         `.             /         :_,'.'
          \ `...\   _     ,'-.        .'         /_.-'
           `-.__ `,  `'   .  _.>----''.  _  __  /
                .'        /"'          |  "'   '_
               /_|.-'\ ,".             '.'`__'-( \
                 / ,"'"\,'               `/  `-.|" RM */}
    </div>
  );
}
