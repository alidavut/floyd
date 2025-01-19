export function Header( { channel } ) {
  return (
    <div className="border-b border-gray-200/50 bg-white/50">
      <div className="channel-header__content">
        <div className="channel-header__info">
          <h1>{channel.name}</h1>
          <p>{channel.description}</p>
        </div>
      </div>
    </div>
  );
}
