/*
  🚀 Question 12: Count number of words in a paragraph.

   🧩 Example:
   Input: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quis quam explicabo, perferendis maxime adipisci consequatur? Saepe sequi corrupti in omnis vitae quod veritatis optio voluptatibus amet necessitatibus, beatae reprehenderit. Mollitia dignissimos in voluptatem molestiae laboriosam nesciunt voluptas explicabo consequatur sequi alias qui nobis, voluptatibus quisquam, enim provident ab odit blanditiis incidunt, laborum dolore similique. Error officiis tenetur voluptates quisquam, doloremque optio enim eveniet veniam vitae repudiandae repellat sed pariatur ad  

   Output: 72
   
*/
let para =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quis quam explicabo, perferendis maxime adipisci consequatur? Saepe sequi corrupti in omnis vitae quod veritatis optio voluptatibus amet necessitatibus, beatae reprehenderit. Mollitia dignissimos in voluptatem molestiae laboriosam nesciunt voluptas explicabo consequatur sequi alias qui nobis, voluptatibus quisquam, enim provident ab odit blanditiis incidunt, laborum dolore similique. Error officiis tenetur voluptates quisquam, doloremque optio enim eveniet veniam vitae repudiandae repellat sed pariatur ad  ";
function countNumberOfWords(paragraph) {
  return paragraph.trim().split(" ").filter(Boolean).length;
}
console.log(countNumberOfWords(para));
