import Accordion from '../components/Accordion'

const DATA = [
  {
    question: 'Id voluptate quis duis duis quis?',
    answer: `Veniam sunt enim deserunt elit. Aute proident officia nulla aliquip do ex. Quis fugiat labore 
    occaecat proident laboris et ullamco et occaecat minim. Et deserunt consectetur Lorem nisi proident.`
  },
  {
    question: 'Eu labore culpa esse sunt do cillum?',
    answer: `Consequat ullamco laborum aute consequat reprehenderit ex anim sit Lorem. In commodo in reprehenderit 
    occaecat incididunt sit id laboris esse irure excepteur velit fugiat. Reprehenderit ullamco est elit esse consectetur 
    ut culpa amet esse in non pariatur. Aliqua nulla magna aliquip cupidatat commodo quis sint proident Lorem non ea.`
  },
  {
    question: 'Deserunt nostrud mollit irure consectetur officia sint?',
    answer: `Mollit non nisi qui cillum ea cillum consectetur deserunt in labore occaecat est cillum. Sint do laborum et 
    magna nostrud reprehenderit anim id dolor nostrud anim excepteur aute. Magna pariatur eiusmod sint quis elit minim.`
  },
]

function FAQs() {

  return (
    <div className="w-full px-4 py-12">
      {DATA.map(item => (
        <Accordion
          key={item.question}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  )
}

export default FAQs
