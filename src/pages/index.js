import { useState } from "react";
import styles from "../styles/Home.module.css"
import { Dropdown } from "@nextui-org/react";
import Image from 'next/image'
// import youtube from "../../public/IconYoutube.png"

function Home() {
  const [year, setYear] = useState(false)
  const [sem, setSem] = useState(false)
  const [sem2, setSem2] = useState(false)

  const handleYear = ()=>{
    setYear(true)
  }

  if(sem){
    return (
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className="flex">
            <div className="mt-7 mr-2 text-red-600 font-extrabold text-3xl">YouTube</div>
            <div className={styles.heading_main}>Playlists</div>
          </div>
            <Dropdown >
              <Dropdown.Button shadow color="" textColor="secondary">
                LINEAR ALGEBRA AND CALCULUS
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/RVSMathsAcademy">RVS MATHS ACADEMY</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/BTechMathematics">BTECH MATHEMATICS</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                ENGINEERING PHYSICS
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/SajeevMohan">SAJEEV MOHAN 4 PHYSICS </a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UC97ibScoiBRlM1fahAmZW4g">TARGET KTU</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                ENGINEERING CHEMISTRY
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UChqeXU2cm5byUJlWtkUIJXQ">ANJANA GOPINADH</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UCptJp4seC8ScP2vxqYoWEXQ">CHEMISTRY TOPPER</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UCXhr4X9u8FN6J55vWyqd2TQ">SIMPLE LEARNING ACADEMY</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                ENGINEERING MECHANICS
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/LETSDISCUSS1">LET S DISCUSS</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UCei-KPCET7sFlvKGeGdPLig">LEARN WITH JOSY VAIDYAN</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/KrishnenduSivadas">KRISHNENDHU SIVADAS</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                ENGINEERING GRAPHICS
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UCJqt0z8fJviKtQU0EylY_xQ">ENGINEERING GRAPHICS BY NITHIN</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/TechSagacity">TECH SAGACATY</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UC2bMBiAKrOkxZcS9ErDHJjw">GRAPHICS ZONE 2021</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                BASICS OF CIVIL AND MECHANICAL
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/VISHNUSHAJIKANNETH">IGNITED VISHNU SHAJI KANEETH</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UC7cLFGuJ9nocb-aYH-jOr0Q">MECH CIV</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/NehaShanBtechLectures">STUDY WITH NEHA SHAN (BCE)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UCpZc3h96dUesE_JjX9hN6zA">COURTEOUS CONCEPTS</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                BASICS OF ELECTRICAL AND ELECTRONICS
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/ShastraTechnicalInstitute">SHASTRA TECHNICAL INSTITUTE (BEC)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UC7cOwgD4GPyzoJHItVXiRYQ">KTU ECE CLASS ROOM (BEE)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UCy0fLJ_x2C9LKi9vIqbMOAA">SREENATH VADASSERY(BEE)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UClorWwmi7GhAt4W9I2z04gA">FASEEN (BEE)</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

          <div className={styles.footer_main}>
            <div>
              <div className="text-white flex justify-center text-sm ml-4">An initiative by :</div>
              <div className="flex justify-center font-bold text-xl text-white ml-2 mt-1">MSF GEC</div>
            </div>
            <div>
              <div className="text-white flex justify-center text-sm pr-4">Your Suggestions :</div>
              <a href="http://wa.me/918139841238"><Image src="/assets/whatsapp.png" width="30" height="20" className="ml-9 mt-1"></Image></a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if(sem2){
    return (
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className={styles.heading}>GEC_LEARN</div>
          <div> Coming soon.....</div>
          <div className={styles.footer}>
            <div>
              <div className="text-white flex justify-center text-sm ml-4">An initiative by :</div>
              <div className="flex justify-center font-bold text-xl text-white ml-2 mt-1">MSF GEC</div>
            </div>
            <div>
              <div className="text-white flex justify-center text-sm pr-4">Your Suggestions :</div>
              <a href="http://wa.me/918139841238"><Image src="/assets/whatsapp.png" width="30" height="20" className="ml-9 mt-1"></Image></a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if(year){
    return (
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className="absolute -ml-52 mt-9 font-bold text-2xl">1st Year</div>
          <div className="mt-3">
            <Image src="/assets/bg-image.jpg" width="360" height="200" className="rounded-3xl shadow-xl"></Image>
          </div>
          <button className={styles.button_17} onClick={() => setSem(true)}>1st SEM</button>
          <button className={styles.button_17} onClick={() => setSem2(true)}>2nd SEM</button>
          <div className={styles.footer}>
            <div>
              <div className="text-white flex justify-center text-sm ml-4">An initiative by :</div>
              <div className="flex justify-center font-bold text-xl text-white ml-2 mt-1">MSF GEC</div>
            </div>
            <div>
              <div className="text-white flex justify-center text-sm pr-4">Your Suggestions :</div>
              <a href="http://wa.me/918139841238"><Image src="/assets/whatsapp.png" width="30" height="20" className="ml-9 mt-1"></Image></a>
            </div>
          </div>
        </div>
      </div>
    )
  }

    return ( 
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className="absolute mt-4 flex flex-col w-96">
            <Image src="/assets/ch_img.png" width="60" height="40" className="ml-3"></Image>
            <div className="font-medium text-xl ml-4 text-white">CH MEMORIAL </div><div className="font-medium text-md -mt-1 ml-4 text-white">ONLINE LIBRARY</div>
            <div className="font-bold text-3xl ml-4 mt-2">GEC_LEARN</div>  
          </div>
          <Image src="/assets/main_bg.png" width="650" height="400"></Image>
          <button className={styles.button_17} onClick={handleYear}>1st YEAR</button>
          <div className="mt-6">Other years coming soon.....</div>
          <div className={styles.footer}>
            <div>
              <div className="text-white flex justify-center text-sm ml-4">An initiative by :</div>
              <div className="flex justify-center font-bold text-xl text-white ml-2 mt-1">MSF GEC</div>
            </div>
            <div>
              <div className="text-white flex justify-center text-sm pr-4">Your Suggestions :</div>
              <a href="http://wa.me/918139841238"><Image src="/assets/whatsapp.png" width="30" height="20" className="ml-9 mt-1"></Image></a>
            </div>
          </div>
        </div>
      </div>
      
    );

}

export default Home;