import React, { Component } from "react";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,

  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export default class App extends Component {
  render() {

    const url = "https://applink.com.br/general_salgado_2671155"

    const urlIOS = "https://apps.apple.com/br/app/general-salgado/id1603245906"
    const urlGP = "https://play.google.com/store/apps/details?id=br.com.app.gpu2671155.gpua09dca373f43736ad8f75b0c75af8403"

    const title = `Baixe o App de General Salgado pelos links abaixo:${'\n'}${'\n'}iOS: ${urlIOS} ${'\n'}${'\n'}Google Play: ${urlGP} ${'\n'}${'\n'}Navegador:`
    
    return(
      <>
        <FacebookShareButton 
          url={url}
          title={title}

        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        
        <WhatsappShareButton 
          url={url}
          title={title}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <EmailShareButton 
          url={url}
          title={title}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>

        <LinkedinShareButton 
          url={url}
          title={title}
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>

        <RedditShareButton 
          url={url}
          title={title}
        >
          <RedditIcon size={40} round={true} />
        </RedditShareButton>

        <TelegramShareButton 
          url={url}
          title={title}
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>

        <TwitterShareButton 
          url={url}
          title={title}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
      </>

    )
  }
}