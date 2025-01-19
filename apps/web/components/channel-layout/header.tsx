export function Header( { channel } ) {
  return (
    <header className="channel-header">
      <div className="channel-header__content">
        <div className="channel-header__logo">
          <img src={channel.logoUrl} alt={channel.name} />
        </div>
        <div className="channel-header__info">
          <h1>{channel.name}</h1>
          <p>{channel.description}</p>
        </div>
      </div>
    </header>
  );
}
