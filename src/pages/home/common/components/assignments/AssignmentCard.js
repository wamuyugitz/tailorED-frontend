import "./AssignmentCard.css";

export default function AssignmentCard({ courseName, assignmentName }) {
  return (
    <div className="assignement-card">
      <h3>{courseName}</h3>
      <h4>{assignmentName}</h4>
      <p>
        Mauris tincidunt interdum massa sit amet laoreet. Donec ac iaculis
        dolor. Nunc tempor non ligula non efficitur. Mauris diam diam,
        scelerisque ac dapibus vitae, luctus in lectus. Pellentesque sed augue
        et odio ultrices efficitur quis eget ipsum. Curabitur tellus nisl,
        finibus dapibus sagittis id, interdum nec augue. Cras vulputate arcu eu
        leo hendrerit egestas. Duis aliquet tristique lacus. Phasellus at risus
        sit amet nisl viverra semper eu ut sem.  Duis nunc lacus, tempor ac
        augue id, feugiat dignissim metus. Etiam iaculis sit amet lorem id
        rhoncus. Maecenas blandit nec ex nec aliquam. Vestibulum diam neque,
        porttitor id quam ut, condimentum pretium ligula. Fusce dictum nunc vel
        nibh convallis tempus.
      </p>
    </div>
  );
}
