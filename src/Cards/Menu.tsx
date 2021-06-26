import { Link } from "react-router-dom";

function MenuPlace() {
    function openNav() {
        document.getElementById("mySidenav")!.style.width = "250px";
      };
      function closeNav() {
        document.getElementById("mySidenav")!.style.width = "0px";
      };
  return (  
    <div className="menu-toggle">
        <div id="mySidenav" className="sidenav">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
  <Link to='/'>
  <a href="#">Home</a>
  </Link>
  <Link to='/section/1/'>
  <a href="#">Action (set A)</a>
  </Link>
  <Link to='/section/2/'>
  <a href="#">Action (set B)</a>
  </Link>
  <Link to='/section/3/'>
  <a href="#">Action (set C)</a>
  </Link>
  <Link to='/section/4/'>
  <a href="#">Adjective</a>
  </Link>
  <Link to='/section/5/'>
  <a href="#">Animal (set A)</a>
  </Link>
  <Link to='/section/6/'>
  <a href="#">Animal (set B)</a>
  </Link>
  <Link to='/section/7/'>
  <a href="#">Clothes</a>
  </Link>
  <Link to='/section/8/'>
  <a href="#">Emotional</a>
  </Link>
</div>
<svg width="56px" height="47px" viewBox="0 0 56 47" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={openNav} >
    <title>happy-burger</title>
    <desc>Created with Sketch Beta.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="happy-burger" >
            <g id="Page-1">
                <path d="M52.682,46.169 L3.97,46.169 C2.313,46.169 0.97,44.826 0.97,43.169 L0.97,40.09 C0.97,38.433 2.313,37.09 3.97,37.09 L52.682,37.09 C54.339,37.09 55.682,38.433 55.682,40.09 L55.682,43.169 C55.682,44.826 54.339,46.169 52.682,46.169" id="Fill-1" fill="#E8C274"></path>
                <path d="M1.537,44.925 C2.082,45.68 2.968,46.172 3.971,46.172 L52.681,46.172 C53.595,46.172 54.411,45.763 54.961,45.121 C54.411,45.763 53.594,46.169 52.682,46.169 L3.97,46.169 C2.969,46.169 2.082,45.679 1.537,44.925" id="Fill-2" fill="#ECECEC"></path>
                <path d="M52.681,37.092 L42.681,37.092 C44.341,37.092 45.681,38.432 45.681,40.092 L45.681,43.172 L3.971,43.172 C2.311,43.172 0.971,41.823 0.971,40.172 L0.971,43.172 C0.971,43.825 1.181,44.431 1.537,44.925 C2.082,45.679 2.969,46.169 3.97,46.169 L52.682,46.169 C53.594,46.169 54.411,45.763 54.961,45.121 C55.41,44.596 55.681,43.914 55.681,43.172 L55.681,40.092 C55.681,38.432 54.341,37.092 52.681,37.092" id="Fill-3" fill="#D7B56E"></path>
                <path d="M50.268,27.414 L6.384,27.414 C4.728,27.414 3.384,26.071 3.384,24.414 L3.384,23.979 C3.384,22.322 4.728,20.979 6.384,20.979 L50.268,20.979 C51.925,20.979 53.268,22.322 53.268,23.979 L53.268,24.414 C53.268,26.071 51.925,27.414 50.268,27.414" id="Fill-4" fill="#736357"></path>
                <path d="M52.854,22.62 L3.798,22.62 C2.236,22.62 0.97,21.354 0.97,19.792 C0.97,9.379 9.411,0.938 19.824,0.938 L36.828,0.938 C47.241,0.938 55.682,9.379 55.682,19.792 C55.682,21.354 54.416,22.62 52.854,22.62" id="Fill-5" fill="#E8C274"></path>
                <path d="M55.661,20.143 C55.491,21.511 54.345,22.576 52.942,22.619 C54.345,22.576 55.491,21.511 55.661,20.143 M36.828,0.938 L26.828,0.938 L36.828,0.938 C47.241,0.938 55.682,9.379 55.682,19.792 C55.682,9.379 47.241,0.938 36.828,0.938" id="Fill-6" fill="#F6F6F6"></path>
                <path d="M52.942,22.619 C52.913,22.619 52.884,22.62 52.854,22.62 C52.884,22.62 52.913,22.619 52.942,22.619" id="Fill-7" fill="#706156"></path>
                <path d="M48.359,14.69 C47.875,14.69 47.482,14.297 47.482,13.813 C47.482,13.329 47.875,12.937 48.359,12.937 C48.843,12.937 49.235,13.329 49.235,13.813 C49.235,14.297 48.843,14.69 48.359,14.69 M46.804,8.747 C46.32,8.747 45.927,8.354 45.927,7.87 C45.927,7.386 46.32,6.993 46.804,6.993 C47.288,6.993 47.68,7.386 47.68,7.87 C47.68,8.354 47.288,8.747 46.804,8.747 M41.834,5.695 C41.35,5.695 40.957,5.302 40.957,4.818 C40.957,4.334 41.35,3.941 41.834,3.941 C42.318,3.941 42.71,4.334 42.71,4.818 C42.71,5.302 42.318,5.695 41.834,5.695 M36.828,0.938 L26.828,0.938 C37.241,0.938 45.682,9.379 45.682,19.792 C45.682,21.354 44.416,22.62 42.854,22.62 L52.854,22.62 C52.884,22.62 52.913,22.619 52.942,22.619 C54.345,22.576 55.491,21.511 55.661,20.143 C55.675,20.028 55.682,19.911 55.682,19.792 C55.682,9.379 47.241,0.938 36.828,0.938" id="Fill-8" fill="#DFBC71"></path>
                <path d="M50.268,37.09 L6.384,37.09 C4.728,37.09 3.384,35.747 3.384,34.09 L3.384,33.655 C3.384,31.999 4.728,30.655 6.384,30.655 L50.268,30.655 C51.925,30.655 53.268,31.999 53.268,33.655 L53.268,34.09 C53.268,35.747 51.925,37.09 50.268,37.09" id="Fill-9" fill="#736357"></path>
                <path d="M6.332,30.656 L6.33,30.656 L6.332,30.656 M50.32,30.656 L50.322,30.656 L50.32,30.656 M6.341,30.656 L6.338,30.656 L6.341,30.656 M50.311,30.656 L50.314,30.656 L50.311,30.656 M6.354,30.656 L6.348,30.656 L6.354,30.656 M50.298,30.656 L50.305,30.656 L50.298,30.656 M6.363,30.656 L6.358,30.656 L6.363,30.656 M50.289,30.656 L50.294,30.656 L50.289,30.656 M6.373,30.655 C6.371,30.655 6.369,30.655 6.367,30.656 C6.369,30.655 6.371,30.655 6.373,30.655 M50.28,30.655 C50.281,30.655 50.284,30.655 50.285,30.656 C50.284,30.655 50.281,30.655 50.28,30.655 M50.268,30.655 L6.384,30.655 L6.375,30.655 L6.384,30.655 L50.268,30.655 L50.277,30.655 L50.268,30.655" id="Fill-10" fill="#B3B4B2"></path>
                <path d="M50.268,30.655 L6.384,30.655 L6.375,30.655 L6.373,30.655 C6.371,30.655 6.369,30.655 6.367,30.656 L6.363,30.656 L6.358,30.656 L6.354,30.656 L6.348,30.656 L6.341,30.656 L6.338,30.656 L6.332,30.656 L6.33,30.656 C5.05,30.679 3.976,31.509 3.568,32.655 L53.084,32.655 C52.677,31.509 51.603,30.679 50.322,30.656 L50.32,30.656 L50.314,30.656 L50.311,30.656 L50.305,30.656 L50.298,30.656 L50.294,30.656 L50.289,30.656 L50.285,30.656 C50.284,30.655 50.281,30.655 50.28,30.655 L50.277,30.655 L50.268,30.655" id="Fill-11" fill="#5F574D"></path>
                <path d="M18.985,26.875 C18.985,27.955 16.924,28.831 14.381,28.831 C11.838,28.831 9.777,27.955 9.777,26.875 C9.777,25.796 11.838,24.92 14.381,24.92 C16.924,24.92 18.985,25.796 18.985,26.875" id="Fill-12" fill="#B8D86A"></path>
                <path d="M28.193,26.875 C28.193,27.955 26.132,28.831 23.589,28.831 C21.046,28.831 18.985,27.955 18.985,26.875 C18.985,25.796 21.046,24.92 23.589,24.92 C26.132,24.92 28.193,25.796 28.193,26.875" id="Fill-13" fill="#B8D86A"></path>
                <path d="M37.402,26.875 C37.402,27.955 35.34,28.831 32.798,28.831 C30.255,28.831 28.193,27.955 28.193,26.875 C28.193,25.796 30.255,24.92 32.798,24.92 C35.34,24.92 37.402,25.796 37.402,26.875" id="Fill-14" fill="#B8D86A"></path>
                <path d="M46.61,26.875 C46.61,27.955 44.549,28.831 42.006,28.831 C39.463,28.831 37.402,27.955 37.402,26.875 C37.402,25.796 39.463,24.92 42.006,24.92 C44.549,24.92 46.61,25.796 46.61,26.875" id="Fill-15" fill="#B8D86A"></path>
                <path d="M17.156,27.335 C17.156,26.608 14.685,26.019 11.637,26.019 C8.589,26.019 6.119,26.608 6.119,27.335 C6.119,28.062 8.589,28.652 11.637,28.652 C14.685,28.652 17.156,28.062 17.156,27.335" id="Fill-16" fill="#EF4B3A"></path>
                <path d="M28.193,27.335 C28.193,26.608 25.723,26.019 22.675,26.019 C19.627,26.019 17.156,26.608 17.156,27.335 C17.156,28.062 19.627,28.652 22.675,28.652 C25.723,28.652 28.193,28.062 28.193,27.335" id="Fill-17" fill="#EF4B3A"></path>
                <path d="M39.231,27.335 C39.231,26.608 36.76,26.019 33.712,26.019 C30.664,26.019 28.193,26.608 28.193,27.335 C28.193,28.062 30.664,28.652 33.712,28.652 C36.76,28.652 39.231,28.062 39.231,27.335" id="Fill-18" fill="#EF4B3A"></path>
                <path d="M50.268,27.335 C50.268,26.608 47.797,26.019 44.749,26.019 C41.701,26.019 39.231,26.608 39.231,27.335 C39.231,28.062 41.701,28.652 44.749,28.652 C47.797,28.652 50.268,28.062 50.268,27.335" id="Fill-19" fill="#EF4B3A"></path>
                <path d="M53.293,30.655 L43.495,30.655 L41.739,33.84 C41.332,34.311 40.597,34.299 40.206,33.815 L38.647,30.655 L3.36,30.655 C2.465,30.655 1.74,29.93 1.74,29.036 L1.74,29.034 C1.74,28.139 2.465,27.414 3.36,27.414 L53.293,27.414 C54.187,27.414 54.913,28.139 54.913,29.034 L54.913,29.036 C54.913,29.93 54.187,30.655 53.293,30.655" id="Fill-20" fill="#FFCC33"></path>
                <path d="M19.711,9.303 C19.912,10.17 19.189,10.247 18.321,10.447 C17.454,10.648 16.77,10.896 16.57,10.029 C16.369,9.161 16.91,8.296 17.777,8.095 C18.645,7.894 19.511,8.435 19.711,9.303" id="Fill-21" fill="#41443E"></path>
                <path d="M28.326,12.57 C25.663,12.57 23.504,14.493 23.504,15.326 C23.504,16.159 25.663,20.577 28.326,20.577 C30.989,20.577 33.148,16.159 33.148,15.326 C33.148,14.493 30.989,12.57 28.326,12.57" id="Fill-22" fill="#DFBC71"></path>
                <path d="M33.148,14.779 C33.148,15.447 30.989,18.988 28.326,18.988 C25.663,18.988 23.504,15.447 23.504,14.779 C23.504,14.111 25.663,12.57 28.326,12.57 C30.989,12.57 33.148,14.111 33.148,14.779" id="Fill-23" fill="#736357"></path>
                <path d="M18.108,11.779 C17.235,11.779 16.526,12.227 16.526,12.779 C16.526,13.331 17.235,13.779 18.108,13.779 C18.982,13.779 19.69,13.331 19.69,12.779 C19.69,12.227 18.982,11.779 18.108,11.779" id="Fill-24" fill="#EEAA8D"></path>
                <path d="M38.544,11.779 C37.67,11.779 36.962,12.227 36.962,12.779 C36.962,13.331 37.67,13.779 38.544,13.779 C39.418,13.779 40.126,13.331 40.126,12.779 C40.126,12.227 39.418,11.779 38.544,11.779" id="Fill-25" fill="#EEAA8D"></path>
                <path d="M36.941,9.303 C36.74,10.17 37.463,10.247 38.331,10.447 C39.198,10.648 39.882,10.896 40.082,10.029 C40.283,9.161 39.742,8.296 38.875,8.095 C38.007,7.894 37.142,8.435 36.941,9.303" id="Fill-26" fill="#41443E"></path>
                <path d="M23.504,3.941 C23.02,3.941 22.627,4.334 22.627,4.818 C22.627,5.302 23.02,5.695 23.504,5.695 C23.988,5.695 24.38,5.302 24.38,4.818 C24.38,4.334 23.988,3.941 23.504,3.941" id="Fill-27" fill="#F2DAAE"></path>
                <path d="M22.627,8.376 C22.143,8.376 21.751,8.769 21.751,9.253 C21.751,9.737 22.143,10.129 22.627,10.129 C23.111,10.129 23.504,9.737 23.504,9.253 C23.504,8.769 23.111,8.376 22.627,8.376" id="Fill-28" fill="#F2DAAE"></path>
                <path d="M9.849,6.993 C9.364,6.993 8.972,7.386 8.972,7.87 C8.972,8.354 9.364,8.747 9.849,8.747 C10.333,8.747 10.725,8.354 10.725,7.87 C10.725,7.386 10.333,6.993 9.849,6.993" id="Fill-29" fill="#F2DAAE"></path>
                <path d="M14.818,3.941 C14.334,3.941 13.942,4.334 13.942,4.818 C13.942,5.302 14.334,5.695 14.818,5.695 C15.303,5.695 15.695,5.302 15.695,4.818 C15.695,4.334 15.303,3.941 14.818,3.941" id="Fill-30" fill="#F2DAAE"></path>
                <path d="M8.294,12.937 C7.81,12.937 7.417,13.329 7.417,13.813 C7.417,14.297 7.81,14.69 8.294,14.69 C8.778,14.69 9.17,14.297 9.17,13.813 C9.17,13.329 8.778,12.937 8.294,12.937" id="Fill-31" fill="#F2DAAE"></path>
                <path d="M19.641,14.202 C19.157,14.202 18.765,14.594 18.765,15.078 C18.765,15.563 19.157,15.955 19.641,15.955 C20.126,15.955 20.518,15.563 20.518,15.078 C20.518,14.594 20.126,14.202 19.641,14.202" id="Fill-32" fill="#F2DAAE"></path>
                <path d="M33.148,3.941 C32.664,3.941 32.272,4.334 32.272,4.818 C32.272,5.302 32.664,5.695 33.148,5.695 C33.633,5.695 34.025,5.302 34.025,4.818 C34.025,4.334 33.633,3.941 33.148,3.941" id="Fill-33" fill="#F2DAAE"></path>
                <path d="M34.025,8.376 C33.541,8.376 33.148,8.769 33.148,9.253 C33.148,9.737 33.541,10.129 34.025,10.129 C34.509,10.129 34.902,9.737 34.902,9.253 C34.902,8.769 34.509,8.376 34.025,8.376" id="Fill-34" fill="#F2DAAE"></path>
                <path d="M46.804,6.993 C46.32,6.993 45.927,7.386 45.927,7.87 C45.927,8.354 46.32,8.747 46.804,8.747 C47.288,8.747 47.68,8.354 47.68,7.87 C47.68,7.386 47.288,6.993 46.804,6.993" id="Fill-35" fill="#F0D9AE"></path>
                <path d="M41.834,3.941 C41.35,3.941 40.957,4.334 40.957,4.818 C40.957,5.302 41.35,5.695 41.834,5.695 C42.318,5.695 42.71,5.302 42.71,4.818 C42.71,4.334 42.318,3.941 41.834,3.941" id="Fill-36" fill="#F0D9AE"></path>
                <path d="M48.359,12.937 C47.875,12.937 47.482,13.329 47.482,13.813 C47.482,14.297 47.875,14.69 48.359,14.69 C48.843,14.69 49.235,14.297 49.235,13.813 C49.235,13.329 48.843,12.937 48.359,12.937" id="Fill-37" fill="#F0D9AE"></path>
                <path d="M37.011,14.202 C36.527,14.202 36.134,14.594 36.134,15.078 C36.134,15.563 36.527,15.955 37.011,15.955 C37.495,15.955 37.888,15.563 37.888,15.078 C37.888,14.594 37.495,14.202 37.011,14.202" id="Fill-38" fill="#F2DAAE"></path>
            </g>
        </g>
    </g>
</svg>
 </div>
  );



}

export default MenuPlace;










