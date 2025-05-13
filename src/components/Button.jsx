const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random() * 20));
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <Copy />
      <hr />
      <Move />
    </div>
  );
};
const Copy = () => {
  const copyHandler = () => alert("Stop Stealing my content!");
  return (
    <p onCopy={copyHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga
      reprehenderit culpa nulla debitis, modi, error quisquam nam quae iste
      vitae! Est, illo illum qui deleniti accusantium impedit reprehenderit
      adipisci!
    </p>
  );
};

const Move = () => {
  const moveHandler = () => alert("You are moving inside my area!");
  return (
    <p onMouseMove={moveHandler}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa
      reiciendis unde quia beatae quis, amet mollitia soluta. Fugiat fugit, vel
      magnam natus dignissimos dicta! Animi nihil cupiditate dolor suscipit.
      Soluta quaerat molestiae inventore. Neque quisquam molestias sit modi
      odio, eaque asperiores ex ad quis rerum culpa error! In hic odit molestias
      repudiandae eos unde illum! Voluptas corporis repudiandae inventore. Error
      ad nulla itaque ullam repellendus consectetur illum inventore officiis
      accusamus repellat praesentium repudiandae reprehenderit qui, alias facere
      ipsum quas asperiores? Nostrum eaque nobis et! Molestias sequi corporis
      eos quia. Saepe sed praesentium provident adipisci odit odio ducimus
      impedit rem, molestiae aliquam, recusandae ipsam exercitationem minus.
      Quis rem dolorem ea sit hic magnam necessitatibus. Alias illum facere
      mollitia excepturi animi? Debitis deserunt provident quae nostrum maxime,
      illo totam voluptatibus aperiam sapiente, ab alias. Accusantium culpa unde
      fugit fugiat nisi laborum repudiandae incidunt, tempore suscipit
      aspernatur, ex quibusdam saepe sit quasi.
    </p>
  );
};

export default Button;
