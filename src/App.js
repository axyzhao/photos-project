import ScrollContainer from './components/ScrollContainer/';
import React from 'react';
import one from './Images/1.jpg';
import two from './Images/2.jpg';
import three from './Images/3.jpg';
import four from './Images/4.jpg';
import five from './Images/5.jpg';
import six from './Images/6.jpg';
import seven from './Images/7.jpg';
import eight from './Images/8.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2> A university in lockdown </h2>
      <h3> Photographs of Tsinghua in May </h3>
      <p className="caption"> Alex Zhao // May 9, 2022 </p>
      <p>
        On May 7, two of my classmates in Schwarzman, Lujain and Lucia, organized a photograph activity where we split into groups and took pictures around Tsinghua University's campus.
      The campus is locked down, so we were limited to our area of Tsinghua. We were each given eight prompts and two hours to take pictures. At the end, we shared our photos with all.
      Below are our photos.
      </p>

      <ScrollContainer
      image={one}
      mobile={false}
      content={
        [
        "Capture - contrast. We interviewed Mr. Du, 61, a cleaner at the university. He spends 8 hours daily cleaning the pond and enjoys his work. A few steps away, we came across a robot designed by engineering students to skim the pond for leaves.",
        "When asked, Mr. Du described the robot as a mere toy. We settled on the name River Runner 2049 for the composition."
        ]
      }/>
      <ScrollContainer
      image={two}
      mobile={false}
      content={
        [
          "Capture - an animal's perspective. Imagine a squirrel or mouse looking up at your face. Do they feel terror or mere curiosity? Tsinghua is a microcosm of wildlife, hosting geese, songbirds, and squirrels.",
          "This is called A Squirrel's Life. Also, please let me know if these mushrooms are edible. I've already eaten four, and they're definitely not portobellos."
        ]
      }/>
      <ScrollContainer
      image={three}
      mobile={false}
      content={
        [
          "Capture - a body of water. This was taken at a fountain in the university, near the rose garden. The textural contrast between the flowing water and bubbly background drew me to the composition.",
          "In Journey to the West, Sun Wukong is king of the Cave Behind the Water Curtain (水帘洞). I have always been fascinated by the existence of separate worlds hidden behind obvious doors. Hence, we titled this Water Curtain. "
        ]
      }/>
      <ScrollContainer
      image={four}
      mobile={false}
      content={
        [
          "Capture - a portrait of someone you don't know (ask for their permission). We came across this father and son duo on the island in the west side of campus. Though reluctant at first, they were happy to pose for this photo.",
          "The boy was full of life, curious about every nook and cranny in the landscape, and bounding across the grass. The university has many such families who live in apartments within campus. Hence, we called this photo Growing Up or 长大."
        ]
      }/>
      <ScrollContainer
      image={five}
      mobile={false}
      content={
        [
          "Capture - something historical. I borrowed Lena's coat for this photo. There are many statues scattered throughout campus, and Confucius purportedly replaced a prominent statue of Mao that used to be in this spot.",
          "We titled this Neo-Confucianism. I must disclaim this by saying that I am not a Confucian disciple. I find that Chinese people are historically minded and frequently draw inspiration from the past. Confucius has disciples over 2,000 years later."
        ]
      }/>
      <ScrollContainer
      image={six}
      mobile={false}
      content={
        [
          "Capture - something delicious. No ducks were harmed in the taking of this photo. Peking duck is a delicious dish, easily found for just 7 yuan at Qingfen Canteen (清芬餐厅).",
          "Titled Peking Duck. On the eve of Mother's Day, the mother duck in the pond led her children safely from one side of the pond, past the futuristic river runner, past the cleaners, and past the glare of our cameras."
        ]
      }/>
      <ScrollContainer
      image={seven}
      mobile={false}
      content={
        [
          "Capture - something in motion. We were separated from the pagoda by the pond, so this shot of a girl jumproping is poor quality. Public life in China, especially in the parks, is vibrant for the young and old.",
          "Children are often found jumproping, playing tag, or kicking a shuttlecock. The elderly form choirs, traditional music bands, and dancing groups. We titled the photo Spring."
        ]
      }/>
      <ScrollContainer
      image={eight}
      mobile={false}
      content={
        [
          "Capture - something political. Tsinghua University is currently closed to the outside world and bisected in two by a wall. Official cases in Beijing number around forty, and the leadership is not taking chances after Shanghai.",
          "In China, cameras perch on artificial saplings on street corners and by buildings. Guards are omnipresent in public places. For the May 1 Holiday, students gathered outside - as did the guards. We titled this photograph The Third Eye."
        ]
      }/>

    </div>
  );
}

export default App;
