const mapaSVG = `
<svg class="map-svg" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
    <!-- Océano de fondo -->
    <rect width="1000" height="500" fill="#1a3a5c"/>
    
    <!-- AMÉRICA DEL NORTE -->
    <path class="map-country" data-pais="Canadá" data-region="Norteamérica" d="M 150 80 L 200 60 L 280 70 L 320 100 L 300 140 L 250 150 L 200 140 L 160 120 Z"/>
    <path class="map-country" data-pais="Estados Unidos" data-region="Norteamérica" d="M 180 150 L 250 145 L 300 150 L 320 180 L 300 220 L 250 230 L 200 220 L 170 200 Z"/>
    <path class="map-country" data-pais="México" data-region="Centroamérica y Caribe" d="M 200 230 L 250 235 L 280 260 L 270 290 L 240 300 L 210 280 L 190 260 Z"/>
    
    <!-- CENTROAMÉRICA Y CARIBE -->
    <path class="map-region" data-region="Centroamérica y Caribe" d="M 240 300 L 270 305 L 290 320 L 280 340 L 260 345 L 240 330 Z"/>
    <path class="map-country" data-pais="Cuba" data-region="Centroamérica y Caribe" d="M 280 270 L 310 265 L 320 275 L 300 285 L 280 280 Z"/>
    <path class="map-country" data-pais="Haití" data-region="Centroamérica y Caribe" d="M 320 275 L 340 270 L 345 280 L 330 285 Z"/>
    <path class="map-country" data-pais="República Dominicana" data-region="Centroamérica y Caribe" d="M 340 270 L 360 268 L 365 278 L 345 280 Z"/>
    <path class="map-country" data-pais="Jamaica" data-region="Centroamérica y Caribe" d="M 300 290 L 315 288 L 318 295 L 305 297 Z"/>
    <path class="map-country" data-pais="Trinidad y Tobago" data-region="Centroamérica y Caribe" d="M 340 310 L 355 308 L 358 315 L 345 317 Z"/>
    <path class="map-country" data-pais="Barbados" data-region="Centroamérica y Caribe" d="M 370 300 L 378 298 L 380 305 L 372 307 Z"/>
    <path class="map-country" data-pais="Bahamas" data-region="Centroamérica y Caribe" d="M 310 240 L 330 235 L 335 245 L 315 250 Z"/>
    <path class="map-country" data-pais="Antigua y Barbuda" data-region="Centroamérica y Caribe" d="M 350 285 L 356 283 L 358 288 L 352 290 Z"/>
    <path class="map-country" data-pais="Dominica" data-region="Centroamérica y Caribe" d="M 345 290 L 350 288 L 352 293 L 347 295 Z"/>
    <path class="map-country" data-pais="Granada" data-region="Centroamérica y Caribe" d="M 335 305 L 342 303 L 344 308 L 337 310 Z"/>
    <path class="map-country" data-pais="San Cristóbal y Nieves" data-region="Centroamérica y Caribe" d="M 348 280 L 354 278 L 356 283 L 350 285 Z"/>
    <path class="map-country" data-pais="San Vicente y las Granadinas" data-region="Centroamérica y Caribe" d="M 340 295 L 346 293 L 348 298 L 342 300 Z"/>
    <path class="map-country" data-pais="Santa Lucía" data-region="Centroamérica y Caribe" d="M 342 292 L 348 290 L 350 295 L 344 297 Z"/>
    
    <!-- SUDAMÉRICA -->
    <path class="map-country" data-pais="Colombia" data-region="Sudamérica" d="M 280 340 L 310 335 L 320 360 L 300 380 L 280 370 Z"/>
    <path class="map-country" data-pais="Venezuela" data-region="Sudamérica" d="M 310 335 L 350 330 L 360 350 L 340 365 L 320 360 Z"/>
    <path class="map-country" data-pais="Guyana" data-region="Sudamérica" d="M 350 330 L 370 328 L 375 345 L 360 350 Z"/>
    <path class="map-country" data-pais="Surinam" data-region="Sudamérica" d="M 370 328 L 385 326 L 390 343 L 375 345 Z"/>
    <path class="map-country" data-pais="Ecuador" data-region="Sudamérica" d="M 260 370 L 280 370 L 285 390 L 270 395 L 255 385 Z"/>
    <path class="map-country" data-pais="Perú" data-region="Sudamérica" d="M 255 385 L 285 390 L 290 430 L 270 450 L 250 420 Z"/>
    <path class="map-country" data-pais="Brasil" data-region="Sudamérica" d="M 320 360 L 380 350 L 420 370 L 440 410 L 420 450 L 380 460 L 340 440 L 310 400 Z"/>
    <path class="map-country" data-pais="Bolivia" data-region="Sudamérica" d="M 290 400 L 320 395 L 330 420 L 310 435 L 290 420 Z"/>
    <path class="map-country" data-pais="Paraguay" data-region="Sudamérica" d="M 330 430 L 355 428 L 360 445 L 340 450 Z"/>
    <path class="map-country" data-pais="Chile" data-region="Sudamérica" d="M 270 430 L 285 425 L 290 480 L 275 490 L 265 460 Z"/>
    <path class="map-country" data-pais="Argentina" data-region="Sudamérica" d="M 290 440 L 330 435 L 340 470 L 320 490 L 300 480 L 285 460 Z"/>
    <path class="map-country" data-pais="Uruguay" data-region="Sudamérica" d="M 340 445 L 360 443 L 365 455 L 345 458 Z"/>
    
    <!-- EUROPA -->
    <path class="map-country" data-pais="Portugal" data-region="Europa" d="M 470 180 L 480 178 L 482 195 L 472 197 Z"/>
    <path class="map-country" data-pais="España" data-region="Europa" d="M 480 175 L 510 172 L 515 195 L 490 200 L 478 195 Z"/>
    <path class="map-country" data-pais="Francia" data-region="Europa" d="M 490 150 L 520 148 L 525 175 L 500 180 L 488 172 Z"/>
    <path class="map-country" data-pais="Reino Unido" data-region="Europa" d="M 475 120 L 495 118 L 500 140 L 485 145 L 472 135 Z"/>
    <path class="map-country" data-pais="Irlanda" data-region="Europa" d="M 460 125 L 472 123 L 475 138 L 462 140 Z"/>
    <path class="map-country" data-pais="Alemania" data-region="Europa" d="M 520 145 L 545 143 L 550 165 L 525 168 L 518 158 Z"/>
    <path class="map-country" data-pais="Italia" data-region="Europa" d="M 530 175 L 545 172 L 555 195 L 545 210 L 535 195 Z"/>
    <path class="map-country" data-pais="Polonia" data-region="Europa" d="M 545 140 L 570 138 L 575 160 L 550 162 Z"/>
    <path class="map-country" data-pais="Ucrania" data-region="Europa" d="M 570 140 L 610 138 L 620 165 L 580 168 Z"/>
    <path class="map-country" data-pais="Rumania" data-region="Europa" d="M 560 165 L 585 163 L 590 185 L 565 187 Z"/>
    <path class="map-country" data-pais="Grecia" data-region="Europa" d="M 560 190 L 580 188 L 585 210 L 570 215 L 558 205 Z"/>
    <path class="map-country" data-pais="Turquía" data-region="Europa" d="M 580 185 L 620 182 L 630 205 L 600 210 L 585 200 Z"/>
    <path class="map-country" data-pais="Suecia" data-region="Europa" d="M 530 90 L 550 85 L 555 130 L 535 135 L 525 115 Z"/>
    <path class="map-country" data-pais="Noruega" data-region="Europa" d="M 510 80 L 530 75 L 535 120 L 520 125 L 508 105 Z"/>
    <path class="map-country" data-pais="Finlandia" data-region="Europa" d="M 550 80 L 580 75 L 585 120 L 560 125 L 548 105 Z"/>
    <path class="map-country" data-pais="Dinamarca" data-region="Europa" d="M 515 130 L 530 128 L 532 140 L 518 142 Z"/>
    <path class="map-country" data-pais="Países Bajos" data-region="Europa" d="M 505 145 L 518 143 L 520 155 L 508 157 Z"/>
    <path class="map-country" data-pais="Bélgica" data-region="Europa" d="M 500 155 L 512 153 L 514 165 L 502 167 Z"/>
    <path class="map-country" data-pais="Suiza" data-region="Europa" d="M 520 168 L 532 166 L 534 178 L 522 180 Z"/>
    <path class="map-country" data-pais="Austria" data-region="Europa" d="M 532 165 L 548 163 L 550 175 L 534 177 Z"/>
    <path class="map-country" data-pais="República Checa" data-region="Europa" d="M 535 155 L 550 153 L 552 165 L 537 167 Z"/>
    <path class="map-country" data-pais="Hungría" data-region="Europa" d="M 548 165 L 565 163 L 567 180 L 550 182 Z"/>
    <path class="map-country" data-pais="Serbia" data-region="Europa" d="M 555 180 L 570 178 L 572 195 L 557 197 Z"/>
    <path class="map-country" data-pais="Croacia" data-region="Europa" d="M 540 180 L 555 178 L 557 195 L 545 198 L 538 190 Z"/>
    <path class="map-country" data-pais="Bulgaria" data-region="Europa" d="M 565 185 L 585 183 L 587 200 L 567 202 Z"/>
    <path class="map-country" data-pais="Albania" data-region="Europa" d="M 560 195 L 572 193 L 574 208 L 562 210 Z"/>
    <path class="map-country" data-pais="Bosnia y Herzegovina" data-region="Europa" d="M 545 185 L 558 183 L 560 195 L 547 197 Z"/>
    <path class="map-country" data-pais="Eslovenia" data-region="Europa" d="M 535 175 L 545 173 L 547 183 L 537 185 Z"/>
    <path class="map-country" data-pais="Eslovaquia" data-region="Europa" d="M 545 160 L 558 158 L 560 170 L 547 172 Z"/>
    <path class="map-country" data-pais="Lituania" data-region="Europa" d="M 560 120 L 575 118 L 577 135 L 562 137 Z"/>
    <path class="map-country" data-pais="Letonia" data-region="Europa" d="M 560 105 L 575 103 L 577 120 L 562 122 Z"/>
    <path class="map-country" data-pais="Estonia" data-region="Europa" d="M 560 90 L 575 88 L 577 105 L 562 107 Z"/>
    <path class="map-country" data-pais="Bielorrusia" data-region="Europa" d="M 570 110 L 595 108 L 600 130 L 575 132 Z"/>
    <path class="map-country" data-pais="Moldavia" data-region="Europa" d="M 575 170 L 588 168 L 590 182 L 577 184 Z"/>
    <path class="map-country" data-pais="Rusia" data-region="Europa" d="M 600 80 L 750 70 L 780 130 L 700 150 L 620 140 Z"/>
    <path class="map-country" data-pais="Islandia" data-region="Europa" d="M 430 95 L 450 90 L 455 110 L 435 115 Z"/>
    <path class="map-country" data-pais="Luxemburgo" data-region="Europa" d="M 508 158 L 514 157 L 515 163 L 509 164 Z"/>
    <path class="map-country" data-pais="Mónaco" data-region="Europa" d="M 518 182 L 522 181 L 523 186 L 519 187 Z"/>
    <path class="map-country" data-pais="Andorra" data-region="Europa" d="M 495 178 L 500 177 L 501 182 L 496 183 Z"/>
    <path class="map-country" data-pais="San Marino" data-region="Europa" d="M 538 188 L 542 187 L 543 192 L 539 193 Z"/>
    <path class="map-country" data-pais="Ciudad del Vaticano" data-region="Europa" d="M 540 198 L 543 197 L 544 201 L 541 202 Z"/>
    <path class="map-country" data-pais="Malta" data-region="Europa" d="M 545 215 L 550 214 L 551 219 L 546 220 Z"/>
    <path class="map-country" data-pais="Liechtenstein" data-region="Europa" d="M 528 172 L 532 171 L 533 176 L 529 177 Z"/>
    <path class="map-country" data-pais="Montenegro" data-region="Europa" d="M 555 195 L 565 193 L 567 205 L 557 207 Z"/>
    <path class="map-country" data-pais="Macedonia" data-region="Europa" d="M 565 195 L 575 193 L 577 205 L 567 207 Z"/>
    <path class="map-country" data-pais="Armenia" data-region="Europa" d="M 620 185 L 635 183 L 637 198 L 622 200 Z"/>
    <path class="map-country" data-pais="Azerbaiyán" data-region="Europa" d="M 635 180 L 655 178 L 657 195 L 637 197 Z"/>
    <path class="map-country" data-pais="Georgia" data-region="Europa" d="M 615 175 L 630 173 L 632 188 L 617 190 Z"/>
    <path class="map-country" data-pais="Kazajistán" data-region="Europa" d="M 650 130 L 750 120 L 780 160 L 700 170 L 660 160 Z"/>
    <path class="map-country" data-pais="Chipre" data-region="Europa" d="M 600 210 L 612 208 L 614 216 L 602 218 Z"/>
    
    <!-- ÁFRICA -->
    <path class="map-country" data-pais="Marruecos" data-region="África" d="M 470 210 L 500 208 L 505 230 L 480 235 L 468 225 Z"/>
    <path class="map-country" data-pais="Argelia" data-region="África" d="M 500 208 L 540 205 L 545 240 L 510 245 L 502 230 Z"/>
    <path class="map-country" data-pais="Túnez" data-region="África" d="M 520 200 L 530 198 L 532 215 L 522 217 Z"/>
    <path class="map-country" data-pais="Libia" data-region="África" d="M 540 205 L 580 202 L 585 240 L 550 245 L 542 230 Z"/>
    <path class="map-country" data-pais="Egipto" data-region="África" d="M 580 202 L 620 200 L 625 235 L 590 240 L 582 225 Z"/>
    <path class="map-country" data-pais="Sudán" data-region="África" d="M 590 240 L 625 238 L 630 280 L 600 285 L 592 265 Z"/>
    <path class="map-country" data-pais="Etiopía" data-region="África" d="M 620 260 L 650 258 L 655 290 L 630 295 L 622 280 Z"/>
    <path class="map-country" data-pais="Somalia" data-region="África" d="M 650 258 L 680 255 L 685 290 L 660 295 L 652 280 Z"/>
    <path class="map-country" data-pais="Kenia" data-region="África" d="M 620 295 L 650 293 L 655 320 L 630 325 L 622 310 Z"/>
    <path class="map-country" data-pais="Tanzania" data-region="África" d="M 610 320 L 640 318 L 645 345 L 620 350 L 612 335 Z"/>
    <path class="map-country" data-pais="Uganda" data-region="África" d="M 600 295 L 620 293 L 622 315 L 602 317 Z"/>
    <path class="map-country" data-pais="Ruanda" data-region="África" d="M 600 315 L 612 313 L 614 325 L 602 327 Z"/>
    <path class="map-country" data-pais="Burundi" data-region="África" d="M 612 313 L 622 311 L 624 323 L 614 325 Z"/>
    <path class="map-country" data-pais="Mozambique" data-region="África" d="M 630 340 L 660 338 L 665 380 L 640 385 L 632 365 Z"/>
    <path class="map-country" data-pais="Madagascar" data-region="África" d="M 680 340 L 700 335 L 705 380 L 685 385 L 678 365 Z"/>
    <path class="map-country" data-pais="Sudáfrica" data-region="África" d="M 580 380 L 640 375 L 650 420 L 600 430 L 582 410 Z"/>
    <path class="map-country" data-pais="Namibia" data-region="África" d="M 560 360 L 590 358 L 595 395 L 570 400 L 562 380 Z"/>
    <path class="map-country" data-pais="Botsuana" data-region="África" d="M 590 370 L 615 368 L 620 395 L 595 400 L 592 385 Z"/>
    <path class="map-country" data-pais="Zimbabue" data-region="África" d="M 615 365 L 640 363 L 645 390 L 620 395 L 617 380 Z"/>
    <path class="map-country" data-pais="Zambia" data-region="África" d="M 600 340 L 630 338 L 635 365 L 610 370 L 602 355 Z"/>
    <path class="map-country" data-pais="Malaui" data-region="África" d="M 630 325 L 642 323 L 645 350 L 632 352 Z"/>
    <path class="map-country" data-pais="Angola" data-region="África" d="M 540 340 L 580 338 L 585 380 L 550 385 L 542 365 Z"/>
    <path class="map-country" data-pais="República Democrática del Congo" data-region="África" d="M 570 300 L 610 298 L 615 340 L 580 345 L 572 325 Z"/>
    <path class="map-country" data-pais="Camerún" data-region="África" d="M 540 280 L 560 278 L 565 310 L 545 315 L 542 295 Z"/>
    <path class="map-country" data-pais="Nigeria" data-region="África" d="M 510 270 L 540 268 L 545 300 L 520 305 L 512 290 Z"/>
    <path class="map-country" data-pais="Benín" data-region="África" d="M 500 270 L 510 268 L 512 290 L 502 292 Z"/>
    <path class="map-country" data-pais="Togo" data-region="África" d="M 495 270 L 502 268 L 504 288 L 497 290 Z"/>
    <path class="map-country" data-pais="Ghana" data-region="África" d="M 480 270 L 498 268 L 500 295 L 485 300 L 478 285 Z"/>
    <path class="map-country" data-pais="Costa de Marfil" data-region="África" d="M 460 275 L 482 273 L 485 300 L 465 305 L 458 290 Z"/>
    <path class="map-country" data-pais="Guinea" data-region="África" d="M 440 270 L 462 268 L 465 290 L 445 295 L 438 282 Z"/>
    <path class="map-country" data-pais="Guinea-Bisáu" data-region="África" d="M 430 270 L 440 268 L 442 282 L 432 284 Z"/>
    <path class="map-country" data-pais="Senegal" data-region="África" d="M 420 265 L 440 263 L 442 280 L 425 282 L 418 275 Z"/>
    <path class="map-country" data-pais="Gambia" data-region="África" d="M 425 272 L 435 270 L 437 276 L 427 278 Z"/>
    <path class="map-country" data-pais="Mauritania" data-region="África" d="M 420 230 L 460 228 L 465 265 L 430 270 L 418 250 Z"/>
    <path class="map-country" data-pais="Malí" data-region="África" d="M 460 230 L 500 228 L 505 270 L 470 275 L 462 250 Z"/>
    <path class="map-country" data-pais="Burkina Faso" data-region="África" d="M 480 260 L 505 258 L 508 280 L 485 282 L 478 272 Z"/>
    <path class="map-country" data-pais="Níger" data-region="África" d="M 505 240 L 540 238 L 545 275 L 515 280 L 508 260 Z"/>
    <path class="map-country" data-pais="Chad" data-region="África" d="M 540 240 L 575 238 L 580 280 L 550 285 L 542 265 Z"/>
    <path class="map-country" data-pais="Sudán del Sur" data-region="África" d="M 580 270 L 615 268 L 620 300 L 590 305 L 582 290 Z"/>
    <path class="map-country" data-pais="República Centroafricana" data-region="África" d="M 560 280 L 590 278 L 595 310 L 570 315 L 562 300 Z"/>
    <path class="map-country" data-pais="Guinea Ecuatorial" data-region="África" d="M 530 305 L 540 303 L 542 313 L 532 315 Z"/>
    <path class="map-country" data-pais="Gabón" data-region="África" d="M 530 310 L 550 308 L 555 335 L 535 340 L 528 325 Z"/>
    <path class="map-country" data-pais="Congo" data-region="África" d="M 550 310 L 575 308 L 580 340 L 555 345 L 552 330 Z"/>
    <path class="map-country" data-pais="Lesoto" data-region="África" d="M 620 400 L 632 398 L 634 410 L 622 412 Z"/>
    <path class="map-country" data-pais="Eswatini" data-region="África" d="M 635 395 L 645 393 L 647 405 L 637 407 Z"/>
    <path class="map-country" data-pais="Liberia" data-region="África" d="M 455 285 L 470 283 L 472 300 L 458 302 Z"/>
    <path class="map-country" data-pais="Sierra Leona" data-region="África" d="M 445 280 L 458 278 L 460 292 L 448 294 Z"/>
    <path class="map-country" data-pais="Cabo Verde" data-region="África" d="M 395 260 L 405 258 L 407 266 L 397 268 Z"/>
    <path class="map-country" data-pais="Santo Tomé y Príncipe" data-region="África" d="M 545 320 L 552 318 L 554 325 L 547 327 Z"/>
    <path class="map-country" data-pais="Comoras" data-region="África" d="M 660 330 L 668 328 L 670 335 L 662 337 Z"/>
    <path class="map-country" data-pais="Mauricio" data-region="África" d="M 710 360 L 718 358 L 720 366 L 712 368 Z"/>
    <path class="map-country" data-pais="Seychelles" data-region="África" d="M 690 310 L 698 308 L 700 316 L 692 318 Z"/>
    <path class="map-country" data-pais="Yibuti" data-region="África" d="M 640 270 L 650 268 L 652 278 L 642 280 Z"/>
    <path class="map-country" data-pais="Eritrea" data-region="África" d="M 620 240 L 645 238 L 648 260 L 625 262 Z"/>
    
    <!-- ASIA -->
    <path class="map-country" data-pais="Arabia Saudita" data-region="Asia" d="M 620 220 L 660 218 L 670 250 L 640 255 L 622 240 Z"/>
    <path class="map-country" data-pais="Irán" data-region="Asia" d="M 640 195 L 680 193 L 685 225 L 650 230 L 642 215 Z"/>
    <path class="map-country" data-pais="Irak" data-region="Asia" d="M 620 200 L 642 198 L 645 220 L 625 222 Z"/>
    <path class="map-country" data-pais="Siria" data-region="Asia" d="M 610 195 L 625 193 L 627 208 L 612 210 Z"/>
    <path class="map-country" data-pais="Jordania" data-region="Asia" d="M 615 210 L 628 208 L 630 222 L 617 224 Z"/>
    <path class="map-country" data-pais="Líbano" data-region="Asia" d="M 608 200 L 614 199 L 615 208 L 609 209 Z"/>
    <path class="map-country" data-pais="Israel" data-region="Asia" d="M 605 208 L 612 207 L 613 218 L 606 219 Z"/>
    <path class="map-country" data-pais="Baréin" data-region="Asia" d="M 655 225 L 660 224 L 661 229 L 656 230 Z"/>
    <path class="map-country" data-pais="Catar" data-region="Asia" d="M 650 228 L 656 227 L 657 233 L 651 234 Z"/>
    <path class="map-country" data-pais="Emiratos Árabes Unidos" data-region="Asia" d="M 660 230 L 675 228 L 677 238 L 662 240 Z"/>
    <path class="map-country" data-pais="Omán" data-region="Asia" d="M 670 235 L 690 233 L 695 255 L 675 258 L 672 245 Z"/>
    <path class="map-country" data-pais="Yemen" data-region="Asia" d="M 640 250 L 670 248 L 675 270 L 650 272 L 642 262 Z"/>
    <path class="map-country" data-pais="India" data-region="Asia" d="M 680 240 L 730 238 L 740 290 L 710 310 L 690 290 L 682 265 Z"/>
    <path class="map-country" data-pais="Pakistán" data-region="Asia" d="M 660 220 L 690 218 L 695 250 L 670 255 L 662 240 Z"/>
    <path class="map-country" data-pais="Afganistán" data-region="Asia" d="M 670 200 L 700 198 L 705 225 L 680 228 L 672 215 Z"/>
    <path class="map-country" data-pais="Bangladés" data-region="Asia" d="M 730 255 L 745 253 L 748 270 L 733 272 Z"/>
    <path class="map-country" data-pais="Nepal" data-region="Asia" d="M 710 235 L 728 233 L 730 245 L 712 247 Z"/>
    <path class="map-country" data-pais="Bután" data-region="Asia" d="M 728 235 L 740 233 L 742 243 L 730 245 Z"/>
    <path class="map-country" data-pais="Sri Lanka" data-region="Asia" d="M 720 300 L 732 298 L 735 315 L 722 317 Z"/>
    <path class="map-country" data-pais="Maldivas" data-region="Asia" d="M 700 310 L 708 308 L 710 316 L 702 318 Z"/>
    <path class="map-country" data-pais="China" data-region="Asia" d="M 720 150 L 820 145 L 840 200 L 780 220 L 730 210 L 718 180 Z"/>
    <path class="map-country" data-pais="Mongolia" data-region="Asia" d="M 740 120 L 800 115 L 810 150 L 750 155 L 738 140 Z"/>
    <path class="map-country" data-pais="Corea del Norte" data-region="Asia" d="M 820 165 L 838 163 L 840 180 L 822 182 Z"/>
    <path class="map-country" data-pais="Corea del Sur" data-region="Asia" d="M 822 182 L 838 180 L 840 198 L 824 200 Z"/>
    <path class="map-country" data-pais="Japón" data-region="Asia" d="M 860 160 L 880 155 L 885 200 L 870 210 L 858 190 Z"/>
    <path class="map-country" data-pais="Kazajistán" data-region="Asia" d="M 680 130 L 760 125 L 780 160 L 720 165 L 685 150 Z"/>
    <path class="map-country" data-pais="Uzbekistán" data-region="Asia" d="M 680 160 L 720 158 L 725 180 L 685 182 Z"/>
    <path class="map-country" data-pais="Turkmenistán" data-region="Asia" d="M 660 180 L 690 178 L 695 200 L 665 202 Z"/>
    <path class="map-country" data-pais="Kirguistán" data-region="Asia" d="M 720 155 L 745 153 L 748 172 L 723 174 Z"/>
    <path class="map-country" data-pais="Tayikistán" data-region="Asia" d="M 700 180 L 720 178 L 722 195 L 702 197 Z"/>
    <path class="map-country" data-pais="Birmania" data-region="Asia" d="M 740 230 L 770 228 L 775 270 L 750 275 L 742 255 Z"/>
    <path class="map-country" data-pais="Tailandia" data-region="Asia" d="M 750 250 L 775 248 L 780 290 L 760 295 L 752 275 Z"/>
    <path class="map-country" data-pais="Laos" data-region="Asia" d="M 760 240 L 780 238 L 782 265 L 762 267 Z"/>
    <path class="map-country" data-pais="Vietnam" data-region="Asia" d="M 780 240 L 800 238 L 805 290 L 785 295 L 782 270 Z"/>
    <path class="map-country" data-pais="Camboya" data-region="Asia" d="M 760 270 L 780 268 L 782 290 L 762 292 Z"/>
    <path class="map-country" data-pais="Malasia" data-region="Asia" d="M 750 300 L 790 298 L 795 315 L 755 317 Z"/>
    <path class="map-country" data-pais="Singapur" data-region="Asia" d="M 775 315 L 782 314 L 783 320 L 776 321 Z"/>
    <path class="map-country" data-pais="Indonesia" data-region="Asia" d="M 760 320 L 840 315 L 850 340 L 780 345 L 762 335 Z"/>
    <path class="map-country" data-pais="Filipinas" data-region="Asia" d="M 820 240 L 840 235 L 845 280 L 825 285 L 818 265 Z"/>
    <path class="map-country" data-pais="Brunéi" data-region="Asia" d="M 790 305 L 798 304 L 800 312 L 792 313 Z"/>
    <path class="map-country" data-pais="Timor Oriental" data-region="Asia" d="M 840 330 L 855 328 L 857 338 L 842 340 Z"/>
    
    <!-- OCEANÍA -->
    <path class="map-country" data-pais="Papúa Nueva Guinea" data-region="Oceanía" d="M 860 310 L 900 305 L 910 340 L 870 345 L 862 330 Z"/>
    <path class="map-country" data-pais="Australia" data-region="Oceanía" d="M 820 360 L 920 355 L 940 410 L 880 430 L 830 410 L 818 385 Z"/>
    <path class="map-country" data-pais="Nueva Zelanda" data-region="Oceanía" d="M 940 400 L 960 395 L 965 440 L 945 445 L 938 420 Z"/>
    <path class="map-country" data-pais="Fiyi" data-region="Oceanía" d="M 960 340 L 972 338 L 974 350 L 962 352 Z"/>
    <path class="map-country" data-pais="Vanuatu" data-region="Oceanía" d="M 950 355 L 960 353 L 962 368 L 952 370 Z"/>
    <path class="map-country" data-pais="Islas Salomón" data-region="Oceanía" d="M 920 330 L 940 328 L 942 345 L 922 347 Z"/>
    <path class="map-country" data-pais="Samoa" data-region="Oceanía" d="M 970 360 L 980 358 L 982 368 L 972 370 Z"/>
    <path class="map-country" data-pais="Tonga" data-region="Oceanía" d="M 980 380 L 988 378 L 990 388 L 982 390 Z"/>
    <path class="map-country" data-pais="Kiribati" data-region="Oceanía" d="M 900 300 L 920 298 L 922 310 L 902 312 Z"/>
    <path class="map-country" data-pais="Tuvalu" data-region="Oceanía" d="M 960 370 L 968 368 L 970 376 L 962 378 Z"/>
    <path class="map-country" data-pais="Nauru" data-region="Oceanía" d="M 920 315 L 926 314 L 927 320 L 921 321 Z"/>
    <path class="map-country" data-pais="Palaos" data-region="Oceanía" d="M 870 290 L 878 288 L 880 298 L 872 300 Z"/>
    <path class="map-country" data-pais="Micronesia" data-region="Oceanía" d="M 880 280 L 900 278 L 902 290 L 882 292 Z"/>
    <path class="map-country" data-pais="Islas Marshall" data-region="Oceanía" d="M 900 290 L 918 288 L 920 300 L 902 302 Z"/>
</svg>
`;