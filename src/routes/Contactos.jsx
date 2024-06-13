import React from 'react';

const Contactos = () => {
  const contacts = [
    {
      id: 1,
      name: 'Facebook',
      url: 'https://www.facebook.com/irvingdaniel.venturahernandez?mibextid=ZbWKwL',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
    },
    {
      id: 2,
      name: 'GitHub',
      url: 'https://github.com/IrvingVentura',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
    },
    {
      id: 3,
      name: 'Instagram',
      url: 'https://www.instagram.com/irv1906_vh?igsh=MzNlNGNkZWQ4Mg==',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
    },
    {
      id: 4,
      name: 'WhatsApp',
      url: 'https://wa.me/5549303346',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
    }
  ];

  return (
    <div className="py-10 bg-gray-50">
      <h1 className="text-2xl md:text-5xl font-extrabold text-black text-left mb-8">Contactos</h1>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center">
        {contacts.map(contact => (
          <a 
            key={contact.id}
            href={contact.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition duration-300 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 mx-2 mb-4 hover:shadow-xl transform hover:scale-105"
            style={{ minWidth: '150px' }}
          >
            <img src={contact.imgSrc} alt={contact.name} className="w-20 h-20 object-contain transition-transform duration-300 mb-2 hover:scale-110" style={{width: '5rem', height: '5rem'}} />
            <span className="text-lg font-semibold text-gray-800">{contact.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contactos;
