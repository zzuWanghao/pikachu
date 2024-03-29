const string =
    `.skin *{box-sizing: border-box; margin: 0;padding: 0;}
.skin *::before,.skin *::after{box-sizing: border-box}
.skin{
    position: relative;
     min-height: 50vh;
    background-color: #ffe600;
}
.nose   {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 200px;
    margin-left: -10px;
}
@keyframes wave {
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
transform-origin: center bottom;
    animation: wave 200ms infinite linear;
}

.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left:-10px;
    border-radius: 10px 10px 0 0 ;
    background-color: black;

}
.eye{
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 160px;
    background-color: #2e2e2e;
    margin-left: -32px;
    border-radius: 50%;
}
.eye::before{
    border: 3px solid black;
    display: block;
    content: '';
    width: 32px;
    height: 32px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    top:1px;
    left: 8px;
}
.eye.left{
    transform: translateX(-120px);
}
.eye.right{

    transform: translateX(120px);
}
.mouth{

    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 220px;
    margin-left: -100px;
}
.mouth>.up{
    position: relative;
    top: -20px;
    z-index: 1;

}
.mouth>.up>.lip{
    border: 5px solid black;
    height: 30px;
    width: 100px;
    position: absolute;
    border-top: none;
    left: 50%;
    margin-left: -50px;
    background-color: #ffe600;

}
.mouth>.up>.lip.left{

    border-radius: 0 0 0 50px;
    border-right: none;
    transform: rotate(-18deg) translateX(-53px);
}
.mouth>.up>.lip.right{
    border-radius: 0 0 50px 0;
    border-left: none;
    transform: rotate(18deg) translateX(53px);
}
.mouth>.down{
    height: 140px;
    width: 100%;
    position: absolute;
    top: 5px;
    overflow: hidden;
}
.mouth>.down >.circle{
    border: 3px solid black;
    width: 150px;
    height: 800px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius:  150px/800px ;
    background-color: #9b000a;
    overflow: hidden;
}
.mouth>.down>.circle>.circle1{
    width: 200px;
    height: 300px;
    position: absolute;
    bottom:0;
    left: 50%;
    bottom: -190px;
    margin-left: -100px;
    border-radius: 200px/300px;
    background-color:#ff485f ;
}
.face{
    border: 3px solid black;
    position: absolute;
    top: 255px;
    left: 50%;
    margin-left: -44px;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background-color: #ff0000;

}
.face.left{
    transform: translateX(-150px);
}
.face.right{
    transform: translateX(150px);
}
`
export default string;