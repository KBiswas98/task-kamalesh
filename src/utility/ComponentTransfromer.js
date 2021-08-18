export const formattedTexGenerator = (
  _text,
  is_disabled,
  formatted_text,
  rgx,
  Component
) => {
  if (is_disabled) return;
  const { text, entities } = formatted_text;
  if (entities.length <= 0) {
    return !!text ? text : _text;
  } else {
    let sx = text.split(rgx);
    if (formatted_text.entities.length > 0) {
      return entities.map((itm, index) => (
        <span key={index + itm.text}>
          {sx[index]}
          <Component color={itm.color}>{itm.text}</Component>
        </span>
      ));
    }
  }
};
