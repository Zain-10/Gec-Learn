import { useState } from "react";
import styles from "../styles/Home.module.css"
import { Dropdown } from "@nextui-org/react";
import Image from 'next/image'
// import youtube from "../../public/IconYoutube.png"

function Home() {
  const [year, setYear] = useState(false)
  const [sem, setSem] = useState(false)
  const [sem2, setSem2] = useState(false)
  const [isActive, setActive] = useState(false)

  const handleYear = ()=>{
    setYear(true)
  }
  const handleToggle = () => {
    setActive(!isActive);
  }

  if(sem){
    return (
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className={styles.heading_main}>gec learn</div>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                LINEAR ALGEBRA AND CALCULUS
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/c/RVSMathsAcademy">RVS MATHS ACADEMY</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
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
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/c/SajeevMohan">SAJEEV MOHAN 4 PHYSICS </a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
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
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/channel/UChqeXU2cm5byUJlWtkUIJXQ">ANJANA GOPINADH</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/channel/UCptJp4seC8ScP2vxqYoWEXQ">CHEMISTRY TOPPER</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
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
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/c/LETSDISCUSS1">LET S DISCUSS</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/channel/UCei-KPCET7sFlvKGeGdPLig">LEARN WITH JOSY VAIDYAN</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
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
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/channel/UCJqt0z8fJviKtQU0EylY_xQ">ENGINEERING GRAPHICS BY NITHIN</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/c/TechSagacity">TECH SAGACATY</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
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
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/c/VISHNUSHAJIKANNETH">IGNITED VISHNU SHAJI KANEETH</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/channel/UC7cLFGuJ9nocb-aYH-jOr0Q">MECH CIV</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/c/NehaShanBtechLectures">STUDY WITH NEHA SHAN (BCE)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
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
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/c/ShastraTechnicalInstitute">SHASTRA TECHNICAL INSTITUTE (BEC)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/channel/UC7cOwgD4GPyzoJHItVXiRYQ">KTU ECE CLASS ROOM (BEE)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/channel/UCy0fLJ_x2C9LKi9vIqbMOAA">SREENATH VADASSERY(BEE)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/channel/UClorWwmi7GhAt4W9I2z04gA">FASEEN (BEE)</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                LINEAR ALGEBRA AND CALCULUS
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/c/RVSMathsAcademy">RVS MATHS ACADEMY</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  // icon={<Image src={'/assets/IconYoutube.png'} width="27px" height="25px"></Image>}
                >
                  <a href="https://youtube.com/c/BTechMathematics">BTECH MATHEMATICS</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            
            {/* <div>
                  <div className='flex relative mt-6' onClick={handleToggle}>
                    <input className='text-blue-900 p-2 px-3 w-full flex justify-center font-semibold bg-blue rounded-lg cursor-pointer' value='Maths' disabled></input>
                    <div className='bg-yellow-400 rounded-lg py-0.5 px-1 -ml-10 my-1 cursor-pointer'><Image src={"/assets/arrow.png"} width="27px" height="25px" className='' /></div>
                  </div>
                  {isActive &&
                    <div className={styles.dropdown} onClick={handleToggle}>
                      <ul className=''>
                        <div className='hover:bg-blue-200 px-2 rounded-lg cursor-pointer' onClick={() => setPilot(true)}><li> Pilot</li></div>
                        <div className='hover:bg-blue-200 px-2 rounded-lg cursor-pointer' onClick={() => setPilot(false)}><li> Propeller</li></div>
                      </ul>
                    </div>}
            </div> */}

          <div className={styles.footer_main}>MSF GEC</div>
        </div>
      </div>
    )
  }

  if(sem2){
    return (
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className={styles.heading}>gec learn</div>
          <div> Coming soon.....</div>
          <div className={styles.footer}>MSF GEC</div>
        </div>
      </div>
    )
  }

  if(year){
    return (
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className={styles.heading}>gec learn</div>
          <button className={styles.button_17} onClick={() => setSem(true)}>1st SEM</button>
          <button className={styles.button_17} onClick={() => setSem2(true)}>2nd SEM</button>
          <div className={styles.footer}>MSF GEC</div>
        </div>
      </div>
    )
  }

    return ( 
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className={styles.heading}>gec learn</div>
          <button className={styles.button_17} onClick={handleYear}>1st YEAR</button>
          <div>Other years coming soon.....</div>
          <div className={styles.footer}>MSF GEC</div>
        </div>
      </div>
      
    );

}

export default Home;