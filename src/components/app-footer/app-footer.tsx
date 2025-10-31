import { Component, h, Host } from '@stencil/core';
import { getAssetPath } from '../../utils/aem-config';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.css',
  shadow: false,
})
export class AppFooter {

  handleButtonClick = () => {
    console.log('Button clicked');
  };
  
  render() {
    return (
      <Host>
        <footer class="footer">
          <div class="footer-newsletter-subscription">
            <div class="footer-newsletter-content">
              <label>Receive the latest news and unique plans before your trip</label>
              <div class="footer-newsletter-input-container">
                <input type="text" placeholder="Enter your email"></input>
                <spinf-button 
                  class="footer-icon-btn" 
                  variant="secondary" 
                  size="xs" 
                  icon="/assets/icons/arrow-right-black.png" 
                  onButtonClick={this.handleButtonClick}
                >                  
                </spinf-button>
              </div>
              
            </div>
          </div>
          <div class="footer-logo">
            <div class="footer__logo"> 
              <img src={getAssetPath('SPAIN_LOGO')} alt="Spain.Info Logo" />
            </div>
          </div>
          <div class="footer-main">
            Conócenos
          </div>
          
        </footer>
      </Host>
    );
  }
}
