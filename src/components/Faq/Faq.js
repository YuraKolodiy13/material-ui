import React, { Component } from "react";
import './faq.scss'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import AnchorLink from 'react-anchor-link-smooth-scroll'

class Faq extends Component {

  componentDidMount(){
    this.setupStickyClasses();

    const links = document.querySelectorAll(".page-navigation a");
    links[0].classList.add("active");
    links.forEach(item => {
      item.onclick = function (e) {
        document.querySelector(".page-navigation a.active").classList.remove("active");
        e.target.classList.add("active");
      };
    });
  }

  setupStickyClasses = () => {
    const containerEl = document.querySelector(".faq");
    const stickyEl    = document.querySelector(".page-navigation");
    const offset =  20;

    const listener = function () {
      const offsetNow = (typeof offset === "function") ? offset() : offset;
      const containerRect   = containerEl.getBoundingClientRect();
      const stickyHeight    = stickyEl.getBoundingClientRect().height;
      const containerTop    = containerRect.top;
      const containerHeight = containerRect.height;
      const insideContainer = Math.abs(containerTop) + stickyHeight + offsetNow < containerHeight;

      if (containerTop < offsetNow && insideContainer) {
        stickyEl.classList.add("sticky-to-top");
        stickyEl.classList.remove("sticky-to-bottom");
      } else if (containerTop < offsetNow && !insideContainer) {
        stickyEl.classList.add("sticky-to-bottom");
        stickyEl.classList.remove("sticky-to-top");
      } else {
        stickyEl.classList.remove("sticky-to-top");
        stickyEl.classList.remove("sticky-to-bottom");
      }
    };

    window.addEventListener("scroll", listener);
    window.addEventListener("resize", listener);
  };

  render() {
    return (
      <div className='faq'>
        <div className="page-navigation">
          <AnchorLink href="#use">How to use YouMe Social guide</AnchorLink>
          <AnchorLink href="#about">About YouMe Social</AnchorLink>
          <AnchorLink href="#data">Personal Data</AnchorLink>
        </div>
        <div className="faq-page__right group-search-result-block">
          <h2 id='use'>How to use YouMe Social guide</h2>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Expansion Panel 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Expansion Panel 2</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <h2 id='about'>About YouMe Social</h2>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Expansion Panel 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Expansion Panel 2</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <h2 id='data'>Personal Data</h2>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Expansion Panel 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Expansion Panel 2</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis dolor doloremque dolores facere libero necessitatibus nihil, omnis, quo quos, saepe similique suscipit ullam voluptas voluptatibus! A beatae consectetur deserunt perspiciatis quod, sint unde vel! Alias atque, consectetur culpa cum delectus doloribus ducimus eos incidunt ipsam iure laboriosam natus, obcaecati quo similique suscipit tempore ullam veniam veritatis. Asperiores aut deserunt eos ex exercitationem facere modi nulla, officiis quia reiciendis? Aliquid autem delectus dicta dolorum enim est necessitatibus neque perferendis possimus, quo quod, recusandae rem, sequi. Accusamus aliquid autem ducimus eos error, et expedita, facilis fuga inventore ipsa ipsam molestias nam natus nihil quisquam sit soluta sunt ullam vero voluptates! Adipisci at, consequuntur eius expedita inventore ipsum molestiae nobis nostrum odit quidem quod quos repellendus totam vitae voluptatum. Accusamus amet aspernatur dicta ex nostrum placeat voluptatibus. Ab impedit nisi quisquam recusandae! Aperiam, at beatae, dicta dolore ducimus error ex excepturi fuga illo impedit in ipsa maxime mollitia numquam perspiciatis quo rerum sapiente sit ut voluptate! Accusamus dolore laudantium odit. Debitis est inventore nobis velit. Animi debitis est facilis harum hic ipsa iusto, laudantium libero minima molestias mollitia nostrum, quis quod tempore ullam, voluptas voluptates? Accusamus, alias blanditiis delectus dolorum incidunt ipsa, labore maiores, natus nulla quis quisquam quod sapiente suscipit? Accusantium aliquam, architecto blanditiis consequatur corporis culpa delectus deleniti eius eligendi eos et illo illum incidunt laudantium libero magni molestias natus necessitatibus nostrum nulla obcaecati odio officia optio praesentium reprehenderit rerum sint sit soluta tempora temporibus ullam veniam veritatis voluptatibus. Alias at esse et expedita facere libero necessitatibus quo suscipit! Ad architecto facilis impedit in obcaecati perspiciatis similique tempora temporibus! Aliquid aperiam cum dicta dolores dolorum, eos id ipsa ipsum maiores minima molestiae necessitatibus quibusdam soluta tempore voluptas. Adipisci assumenda blanditiis consequuntur cupiditate dolorum est eum excepturi facilis fugit illo in incidunt inventore ipsa ipsam, iste maiores maxime molestiae nesciunt nisi officiis perspiciatis praesentium sapiente tempore temporibus totam ullam vel voluptatum! Animi corporis deserunt dolorem eum eveniet, excepturi illo labore molestias perspiciatis ratione. Aliquam facilis praesentium quisquam? Aperiam beatae doloremque eum ex exercitationem maiores, natus totam voluptatum! Alias, exercitationem, sit? Autem consectetur cupiditate debitis eaque esse eum ex itaque iure iusto, maiores maxime minus non optio praesentium quasi recusandae reiciendis ullam, unde velit voluptates. A, ad asperiores cupiditate debitis, eius eveniet ex explicabo nostrum obcaecati possimus provident quae qui quos saepe soluta totam ut vitae voluptates. Laboriosam nihil qui sapiente tempora. Accusamus adipisci alias corporis ex, fuga ipsa neque officia omnis optio, quas repellat rerum tempora ullam! Ab aut autem beatae blanditiis cum deleniti ea esse expedita illum inventore ipsa, ipsam labore libero molestiae necessitatibus nemo nisi officia porro possimus praesentium quam quo repellat similique sint sunt tempora totam ullam unde ut veniam veritatis vero, voluptate voluptatibus? Ab ad atque blanditiis commodi consectetur consequatur corporis cumque dolor earum explicabo facere ipsam libero maiores molestiae natus nostrum obcaecati, odio odit omnis, perferendis perspiciatis provident quae quaerat quasi qui, quidem quos soluta suscipit temporibus tenetur unde veritatis voluptates voluptatibus! Animi ex ipsam laboriosam nemo perferendis porro provident similique unde vel. Aliquam aperiam architecto commodi debitis ea eos ex facilis fuga fugit id illum impedit itaque laboriosam laborum laudantium libero nemo nesciunt quam quis, reiciendis, repellat, repellendus saepe ut veniam voluptate! Eveniet, expedita fugit ipsam magnam obcaecati omnis qui quod reiciendis vel voluptas? Ab ad aliquid eligendi ipsum maiores nihil quia, voluptate? Consectetur ipsum neque praesentium recusandae voluptates. Ad at eos expedita odio tempora. Commodi expedita ipsa minima nobis omnis porro quasi repudiandae sint sunt, voluptates? Ad aliquid aperiam, doloribus earum fugiat, inventore ipsam laboriosam laudantium magnam magni molestias nemo quae ratione, saepe similique tenetur velit vero. At deserunt eligendi eos explicabo, ipsa molestias necessitatibus nobis quaerat, rerum sed soluta, totam. A ab accusantium alias aliquid delectus dignissimos doloribus earum fugit impedit itaque iure labore laudantium nostrum odit optio perspiciatis possimus suscipit, tempora voluptatem voluptates. Accusantium aliquam beatae blanditiis deserunt dolores eaque facere harum laudantium libero magnam maiores natus non, quidem, ratione rerum tempore totam unde velit veritatis voluptatibus. Blanditiis dicta doloribus mollitia natus optio quam veritatis. Consequuntur cupiditate ea ex id iste labore magnam magni minus natus, necessitatibus neque nihil non, odit officia placeat quae quas rem ullam vitae voluptates! Accusantium aperiam assumenda at commodi debitis dignissimos distinctio hic id illum inventore ipsam ipsum laborum nam nobis nulla obcaecati praesentium quam, qui quod repellendus rerum sint voluptate. Accusamus alias aliquid amet atque commodi consectetur culpa debitis delectus doloremque, dolores ea eius et ex exercitationem facere facilis illo ipsum iste labore, maiores minus modi neque nobis qui reiciendis rem reprehenderit sed sunt tempore tenetur unde velit vitae voluptatum! Asperiores commodi consectetur cum cumque deleniti deserunt dolor doloribus earum impedit inventore ipsa ipsam iure libero magnam molestias necessitatibus neque nesciunt non nulla numquam obcaecati officia omnis porro praesentium, quam quia quibusdam quisquam quo ratione repellat repellendus, reprehenderit tempora velit veniam voluptate voluptatem voluptatum. Accusantium aliquam aliquid atque blanditiis commodi consequuntur debitis dignissimos ducimus enim expedita explicabo illum in incidunt inventore ipsam libero modi, necessitatibus neque nobis officiis provident quae qui quia repellendus repudiandae saepe sed tempore temporibus totam ut vel veritatis voluptas voluptates! A, accusantium ad adipisci alias aliquid, atque autem consectetur deserunt dignissimos doloremque doloribus ea earum et eveniet explicabo harum ipsum itaque magni molestiae mollitia neque nisi numquam odio officia perferendis possimus provident qui, quibusdam reiciendis reprehenderit rerum sequi sunt tempora ullam unde veritatis voluptatibus! Ab, autem hic incidunt laborum nemo quod? Aliquam at atque commodi consequatur dolor ducimus enim ex fuga impedit inventore itaque iure labore maiores molestias mollitia natus necessitatibus nemo nesciunt nihil, perferendis provident recusandae repellat saepe veniam voluptatem voluptatibus voluptatum. Dicta dolores dolorum eligendi exercitationem hic in ipsa ipsam nemo nihil obcaecati, quaerat vero. Aperiam debitis nostrum optio voluptatum. A ad aspernatur aut beatae, culpa cum cumque delectus deleniti eaque magnam nulla obcaecati odit qui quisquam rem sunt ullam. Asperiores cumque fuga hic numquam quibusdam tempora unde? Facere facilis natus quibusdam soluta? Animi aperiam fugiat perspiciatis provident quo tempora voluptatum. Consequuntur debitis dolorem dolores fuga nostrum quibusdam rem rerum.</p>

        </div>
      </div>
    );
  }
}

export default Faq;
