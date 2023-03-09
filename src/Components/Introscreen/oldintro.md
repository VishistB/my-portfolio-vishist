<div className="firstimage">
            {/* the box content for the intro */}
            <div className="introbox">
                <div id="details">
                    <div id="img-box">

                        <img src={visimage} className="vishistimg" />
                    </div>
                    
                    <h2>Vishist Bhagabati</h2>
                    <h3>Computer Engineering</h3>
                    <h3>Sophmore</h3>
                    <div id="introsocials">
                        <a id="introlinkedin" href="https://www.linkedin.com/in/vishist-bhagabati-738398227/">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                width="30px"

                            />
                        </a>
                        <a id="introinsta" href="https://www.instagram.com/vishistbhagabati/">
                          <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'
                            width='30px'
                          />
                        </a>
                        <a id="introgithub" href="https://github.com/VishistB">
                          <img
                            src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                            width='30px'
                          />
                        </a>
                    </div>
                </div>
                <div className="introtext">
                    <h1 id="iam">
                        <b>I am a</b>
                    </h1>
                    <h2>
                    <Typewriter
                        async onInit={(typewriter)=>{
                            typewriter
                                .changeDelay(50)
                                .typeString("Web Developer<br>")
                                .pauseFor(100)
                                .typeString("UI/UX designer<br>")
                                .pauseFor(100)
                                .typeString("Musician<br>")
                                .start()
                        }}
                    ></Typewriter>
                    </h2>
                </div>
                <div id="resume">
                    <a href="https://drive.google.com/file/d/1XDfzUAt6pUEDsRY6Z3cg0dTiNeR6Wke4/view?usp=sharing"><img src="https://snipstock.com/assets/cdn/png/9158b40e7bdbc9f91c717998388bd27f.png" width="300vw"/></a>
                    <h3><b>Resume</b></h3>
                </div>
            </div>
            </div>



            <!-- css -->
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap');
*{
  padding:0;
  margin:0;
  
}
body{
  overflow-x: hidden;
}
.introscreen{
  font-family: 'Montserrat', sans-serif;
  padding:0 0 2% 0;
  background: #0B0C10;
}
.introbox{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-around;
  width: 100%;
  min-height: 100%;
  /* position: absolute; */
  top: 0%;
  /* margin: 0 auto; */
  backdrop-filter: blur(8px);
}
.vishistimg{
  width: 10vw;
}
.firstimage{
  background:linear-gradient( rgba(2, 13, 32,0.7), rgba(2, 13, 32,0.7) ), url('https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  height: 100vh;
  box-shadow: inset 0px 0px 30px 5px  #AB25AD;
  backdrop-filter: blur(10px);
}


/* css for my picture box */
#details{
  text-align: center;
  /* margin: 0 2vw 0 10vw; */
  padding: 100vw 10vw;
  color:#FDF2FE;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-color:#0B0C10;
  border:solid 2px #FDF2FE;
  border-radius:10px;
  padding: 0.5% 1% 4% 1%;
  box-shadow: 0px 0px 100px 0px  #AB25AD;
  animation: stonks 1s linear infinite alternate;
}

@keyframes stonks{
  0% {box-shadow: 0px 0px 10px 0px #AB25AD;}
16.66%{box-shadow: 0px 0px 20px 0px #AB25AD;}
33.32%{box-shadow: 0px 0px 30px 0px #AB25AD;}
49.98%{box-shadow: 0px 0px 40px 0px #AB25AD;}
66.64%{box-shadow: 0px 0px 50px 0px #AB25AD;}
100% {box-shadow: 0px 0px 60px 10px #AB25AD;}
}

#img-box{
  background-color:white;
  width: 10vw;
  height: 10vw;
  margin:30px;
  border:solid 2px #FDF2FE;
  box-shadow: 0px 0px 0px 0px  #AB25AD;
  border-radius:7px;
  transition:all 0.5s;
}
#img-box:hover{
  background-color:rgba(0, 0, 0, 0);
  width: 10vw;
  height: 10vw;
  margin:30px;
  border:solid 2px #FDF2FE;
  box-shadow: 0px 0px 50px 2px  #AB25AD;
  border-radius:7px;
  
}
#introsocials{
  margin-top: 30px;
}
#introlinkedin{
  margin: 10px;
}
#introinsta{
  margin: 10px;
}
#introgithub{
  margin: 10px;
}
#introgithub img{
  border-radius: 50%;  
}

#details h2{
  font-size:2vw;
  background: rgba(0, 0, 0, 0);
}

#details h3{
  font-size:1vw;
  background: rgba(0, 0, 0, 0)
}
/* intro picturebox ends here */

/* for the type-thingie */
.introtext{
  font-size: 27px;
  color: aliceblue;
  width: 20%;
  /* margin:0 5vw 0px 0 ; */
}
#iam{
  /* margin: 0 18vw 0 0; */
  color: rgb(134, 38, 243);
}


.mywork{
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  font-family: 'Oleo Script Swash Caps', cursive;
  font-size: 50px;
  margin: 80px 0 0 0;
  padding: 40px;
  color: aliceblue;
}
.mywork h3{
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;  
}
#resume{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 0 10vw 0 2vw; */
  background-color: yellow;
  border-radius: 10px ;
  padding: 1vw 0;
  transition: all 0.5s;
}
#resume:hover{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  border-radius: 10px ;
  padding: 10px 0;
  transform: scale(1.1);
}