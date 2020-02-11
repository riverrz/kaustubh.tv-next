import Lottie from "react-lottie";

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: this.props.animationData,
      
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}
