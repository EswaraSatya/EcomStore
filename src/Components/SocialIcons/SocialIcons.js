import React from "react";
import "./SocialIcons.scss";

const SocialIcons = () => {
  return (
    <div class="social-container">
      <ul class="social-icons">
        <li>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@prasadsuryafd1353/"
            target="_blank" rel="noreferrer"
          >
            <i class="fa fa-youtube-play"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-facebook-square"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
