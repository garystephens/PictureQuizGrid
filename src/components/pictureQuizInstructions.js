import React from 'react';

function PictureQuizInstructions(props) {
    return (
        <div id="instructionsBlock">
            <div id="instructions">
                <p style={{ fontWeight: 'bold' }}>INSTRUCTIONS</p>
                <ol>
                    <li>
                        Save up the images for your quiz on your device, making
                        sure, of course, that you have the right to use the
                        images.
                        <br />
                        <p className="tip">
                            Tip: Images where the important part of the image is
                            in the centre work best. You may need to crop some
                            of the image files in an editing tool to adjust
                            this.
                        </p>
                    </li>
                    <li>
                        If you want to be able to generate a version of the quiz
                        showing answers, set each image filename to be the
                        answer (e.g. &quot;Elvis Presley.jpg&quot;).
                    </li>
                    <li>
                        Press the button to select your image files. The images
                        will be ordered in the grid in whatever order they are
                        in when you select them.
                    </li>
                    <li>Adjust the various options to your taste.</li>
                    <li>
                        Optionally, type some watermark text to be overlaid on
                        the grid.
                        <p className="tip">
                            Note: If you are going to print the quiz, check the
                            watermark is in the correct position on the print
                            preview, as it might be in a slightly different
                            position to where it is shown on screen.
                        </p>
                    </li>
                    <li>
                        <span>
                            Take a screenshot of the grid <b>OR</b> print to
                            paper or a PDF
                        </span>
                    </li>
                    <li>
                        If you wish, select to show &apos;Answers&apos; and
                        screenshot or print a version with the answers.
                    </li>
                </ol>
                Please send bug reports, feature suggestions, spare change, etc.
                to: gary.p.stephens [AT] gmail DOT com
                <br />
            </div>
        </div>
    );
}

PictureQuizInstructions.propTypes = {};

export default PictureQuizInstructions;
