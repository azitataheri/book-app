import styles from '../components/SideCard.module.css'
function SideCard({data: {title, image}}) {
   
  return (
    <div>
      <div className={styles.card}>
        <img src={image} alt={title}/>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default SideCard