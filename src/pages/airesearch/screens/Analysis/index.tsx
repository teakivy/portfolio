import './index.css';

function AnalysisScreen() {
	return (
		<div className='analysis-section'>
			<div className='analysis-content'>
				<span>
					<span>
						<h1 className='section-header analysis-header'>Analysis</h1>
					</span>
					<h2 className='results-subtitle'>Demographics</h2>
					<p className='analysis-text'>
						Due to the platforms this survey was shared on, most of the
						participants were Male, however a large portion of the participants
						were Female, and a small portion were Non-binary.
						<br />
						<br />
						As for the status of the participants, 70 were students, 26 were
						educators, and 49 were neither. I believe that this is a decent
						representation of the general public, and the results can be
						considered accurate. Ideally, I would have liked to have more
						educators participate, but the results are still adequate.
					</p>

					<h2 className='results-subtitle'>Students</h2>
					<p className='analysis-text'>
						Students were asked 3 questions about their experience with
						generative AI, and the results were quite interesting. 70 students
						participated in the survey, and the majority of them have used
						generative AI before.
						<br />
						<br />
						When asked if they have used generative AI before, 61 students said
						yes, and 8 students said they have heard of it, but have not used
						it. Only 1 student said they have never heard of generative AI.
						<br />
						<br />
						Of those who have used generative AI, it can be inferred that
						students are comfortable with the technology, as most report using
						it to complete assignments, or do research. This is a good sign, as
						it shows that students are not only comfortable with the technology,
						but are also using it to further their education. It is also worth
						noting that a few students would not even consider using generative
						AI for their assignments, which is also a good sign, as it shows
						that they are not dependent on the technology.
						<br />
						<br />
						As for the general public's opinion on students using generative AI,
						it is quite positive. While most agree that students should not
						depend on the technology, most also agree that it is a good tool to
						use for research. This shows that the general public is supportive
						of the technology, and believes that it is a good tool to integrate
						into education.
					</p>

					<h2 className='results-subtitle'>Educators</h2>
					<p className='analysis-text'>
						Educators were also asked a few questions about their experience
						with generative AI, and the results were a bit more mixed. 26
						educators participated in the survey, and over half have used
						generative AI before, with only one educator saying they have never
						heard of it.
						<br />
						<br />
						Of those who have used generative AI, it can be inferred that
						educators are seeing the potential of the technology, as most report
						either using it for various tasks, or would consider using it in the
						future. This is a good sign, as it shows that educators are not only
						comfortable with the technology, but are also open to it's
						integration into education. One outlier however, is that the
						opinions on it's usage in a grading setting are mixed, with some
						educators being against it, and none reporting that they have
						already used it to grade assignments. Many also reported using AI to
						create assignments, which raises the question, "Have I completed an
						assignment that was created by an AI?"
						<br />
						<br />
						As for the general public's opinion on educators and generative AI,
						it is very mixed. While most agree that educators should not depend
						on the technology, many also agree that it is a good tool to use. As
						expected, most are against using AI to grade assignments, but there
						are a few who are open to it.
					</p>

					<h2 className='results-subtitle'>Current Policies</h2>
					<p className='analysis-text'>
						Currently, it seems that most teachers do not have any policies in
						place for using generative AI, this is likely due to the fact that
						the technology is still relatively new. However, it is clear that
						there is a demand for it, and with any new technology, there will
						need to be policies in place to regulate it's usage.
						<br />
						<br />
						One educator reported that they encourage students to use generative
						AI, but only to check their work, and many report that it is allowed
						with proper citation. This is a good sign, as it shows that
						educators are open to the technology, but are also aware of the
						potential issues that could arise from it's misuse.
					</p>
				</span>
			</div>
		</div>
	);
}

export default AnalysisScreen;
