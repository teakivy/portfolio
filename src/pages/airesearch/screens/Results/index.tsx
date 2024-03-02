import './index.css';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

function ResultsScreen() {
	return (
		<div className='results-section'>
			<div className='results-content'>
				<span>
					<span>
						<h1 className='section-header results-header'>Survey Results</h1>
					</span>
					<p className='results-text'>
						The main goal of this survey was to gather data on the opinions of
						the general public, students, and educators on the use of generative
						AI in educational settings. The survey was divided into three
						sections: one for students, one for educators, and one for the
						general public.
						<br />
						<br />
						This survey was administered via various social media platforms for
						a duration of 3 weeks, and was completed by 145 participants. The
						main platforms used were Facebook, and Discord. The survey was also
						shared with educators at various schools across Georgia.
						<br />
						<br />
						One place where the survey was shared was the "Chatty Men of Newnan"
						Facebook group, which is a group for the male community of Newnan,
						GA. This could be considered a limitation of the survey, as it may
						not accurately represent the opinions of all. However, I believe
						that with the large number of participants from other platforms, the
						results still provide valuable insight into the opinions of the
						general public.
						<br />
						<br />
						Of the participants from Discord, the survey was shared with people
						from across the world, including the United States, Canada, Sweden,
						The United Kingdom, and many other countries.
					</p>
					<h2 className='results-subtitle'>Demographics</h2>
					<div className='research-charts'>
						<Pie
							data={[
								{ value: 22, label: '13 - 17' },
								{ value: 35, label: '18 - 21' },
								{ value: 40, label: '22 - 30' },
								{ value: 20, label: '31 - 40' },
								{ value: 20, label: '41 - 55' },
								{ value: 6, label: '56 +' },
							]}
						/>
						<Pie
							data={[
								{ value: 93, label: 'Male' },
								{ value: 42, label: 'Female' },
								{ value: 5, label: 'Non-binary' },
							]}
						/>
						<Pie
							data={[
								{ value: 70, label: 'Student' },
								{ value: 26, label: 'Educator' },
								{ value: 49, label: 'Neither' },
							]}
						/>
						<Pie
							data={[
								{ value: 108, label: 'Used Generative AI' },
								{ value: 30, label: 'Heard of Generative AI' },
								{ value: 6, label: 'Never Heard of Generative AI' },
							]}
						/>
					</div>
					<span>
						<p className='results-text'>
							These charts show the demographics of the people who participated
							in the survey. The first chart shows the age of the participants,
							the second chart shows the gender of the participants, the third
							chart shows the occupation of the participants, and the fourth
							chart shows the knowledge of the participants on Generative AI.
							<br />
							<h4>What is your age range?</h4>
							Over 50% of all participants were between the ages of 18 and 30,
							with the majority of these being students.
							<br /> <h4>What is your gender?</h4>A large majority of
							participants were also male. With 29% female, and only 3.4%
							Non-binary. This could be considered a limitation of the survey,
							as it may not accurately represent the opinions of all. However, I
							believe that these results still provide valuable insight into the
							opinions of the general public.
							<br /> <h4>Are you currently a student, or an educator?</h4>
							Most participants were students, and the second largest group were
							the general public (neither). Another limitation of the survey is
							that there were not many educators who participated, so the
							results may not accurately represent the opinions of educators.
							<br /> <h4>Have you used Generative AI before?</h4>
							Nearly 75% of participants have used Generative AI before, and
							another 20% have heard of Generative AI. This shows that the
							participants are knowledgeable about Generative AI, and their
							opinions are useful for this study.
						</p>
					</span>
					<h2 className='results-subtitle'>Student AI Usage</h2>
					<div className='research-charts'>
						<Pie
							data={[
								{
									value: 23,
									label: 'Used',
								},
								{
									value: 20,
									label: 'Would Consider',
								},
								{
									value: 26,
									label: 'Would Not Consider',
								},
							]}
						/>
						<Pie
							data={[
								{
									value: 34,
									label: 'Used',
								},
								{
									value: 20,
									label: 'Would Consider',
								},
								{
									value: 16,
									label: 'Would Not Consider',
								},
							]}
						/>
						<Pie
							data={[
								{
									value: 40,
									label: 'Used',
								},
								{
									value: 13,
									label: 'Would Consider',
								},
								{
									value: 17,
									label: 'Would Not Consider',
								},
							]}
						/>
					</div>
					<span>
						<p className='results-text'>
							These charts show the usage of Generative AI by students. The
							first chart shows the usage of Generative AI to complete
							assignments (such as essays), the second chart shows the usage of
							Generative AI to research, and the third chart shows the usage of
							Generative AI to learn new skills.
							<br />
							<h4>
								Have you ever used generative AI to complete an assignment?
								(such as an essay)
							</h4>
							While the results are fairly even, a large number of students
							report that they would not consider using generative AI to
							complete an assignment, but a significant number of students have
							already used AI to complete an assignment, and a significant
							number of students would consider using AI for this.
							<br />{' '}
							<h4>
								Have you ever used generative AI to research or come up with a
								topic for an assignment?
							</h4>
							Once again, the results are fairly even, with a large number of
							students saying that they would not consider using generative AI
							to research, but with a majority of students saying that they
							either have or would consider using generative AI to research.
							<br />{' '}
							<h4>Have you ever used generative AI to learn something new?</h4>
							This time, the results are more clear, with a majority of students
							saying that they have used generative AI to learn something new,
							and a significant number of students saying that they would
							consider using generative AI for learning.
						</p>
					</span>
					<h2 className='results-subtitle'>Educator AI Usage</h2>
					<div className='research-charts'>
						<Pie
							data={[
								{
									value: 8,
									label: 'Used',
								},
								{
									value: 15,
									label: 'Would Consider',
								},
								{
									value: 2,
									label: 'Would Not Consider',
								},
							]}
							scale={0.8}
						/>
						<Pie
							data={[
								{
									value: 8,
									label: 'Used',
								},
								{
									value: 16,
									label: 'Would Consider',
								},
								{
									value: 1,
									label: 'Would Not Consider',
								},
							]}
							scale={0.8}
						/>
						<Pie
							data={[
								{
									value: 14,
									label: 'Used',
								},
								{
									value: 10,
									label: 'Would Consider',
								},
								{
									value: 1,
									label: 'Would Not Consider',
								},
							]}
							scale={0.8}
						/>
						<Pie
							data={[
								{
									value: 15,
									label: 'Would Consider',
								},
								{
									value: 10,
									label: 'Would Not Consider',
								},
							]}
							scale={0.8}
						/>
						<Pie
							data={[
								{
									value: 10,
									label: 'Used',
								},
								{
									value: 15,
									label: 'Would Consider',
								},
							]}
							scale={0.8}
						/>
					</div>
					<span>
						<p className='results-text'>
							These charts show the usage of Generative AI by educators. The
							first chart shows the usage of Generative AI to create a lesson
							plan, the second chart shows the usage of Generative AI to create
							assignments, the third chart shows the usage of Generative AI to
							research, the fourth chart shows the usage of Generative AI to
							grade assignments, and the fifth chart shows the usage of
							Generative AI to learn something new.
							<br />
							<h4>
								Have you ever used generative AI to create a lesson plan for a
								lecture?
							</h4>
							Most educators would consider using generative AI to create a
							lesson plan, but only a few have already used AI to create a
							lesson plan. Even fewer educators would not consider using
							generative AI for this purpose.
							<br />{' '}
							<h4>
								Have you ever used generative AI to create an assignment for
								your students?
							</h4>
							Similarly, most educators would consider using generative AI to
							create an assignment, but only a few have already done so. Even
							fewer educators would not consider using generative AI to do this.
							<br />{' '}
							<h4>
								Have you ever used generative AI to research a topic, or come up
								with ideas for a lecture?
							</h4>
							Most educators have already used generative AI to research, and
							many more would consider using generative AI for this purpose,
							with only one participant saying that they would not consider
							using generative AI for this.
							<br />{' '}
							<h4>
								Have you ever used generative AI to grade an assignment from a
								student?
							</h4>
							While most educators would consider using generative AI to grade
							assignments, none of the educators who participated in the survey
							have already used generative AI for this purpose. And many would
							not even consider using AI for this purpose.
							<br />{' '}
							<h4>Have you ever used generative AI to learn something new?</h4>
							Conversely, most educators would consider using generative AI to
							learn something new, with many already having done so. None of the
							educators who participated in the survey would not consider using
							AI for this purpose.
						</p>
					</span>
					<h2 className='results-subtitle'>Pre-existing Policies</h2>
					<div className='research-charts'>
						<Pie
							data={[
								{
									value: 19,
									label: 'All have a Policy',
								},
								{
									value: 39,
									label: 'Some have a Policy',
								},
								{
									value: 11,
									label: 'None have a Policy',
								},
							]}
						/>
						<Pie
							data={[
								{
									value: 4,
									label: 'Has a Policy',
								},
								{
									value: 20,
									label: 'No Policy',
								},
							]}
						/>
					</div>
					<span>
						<p className='results-text'>
							These charts show the policies that schools have in place for the
							use of Generative AI. The first chart shows how many students
							report having a policy in place in their classes, and the second
							chart shows how many educators report having a policy in their own
							class.
							<br />
							<h4>
								Do your teachers have AI policies? (Either mentioned in the
								class, or in a syllabus)
							</h4>
							Most students report that either all or some of their teachers
							have a policy for the use of generative AI in their classes, with
							only a few students reporting that none of their teachers have a
							policy.
							<br /> <h4>Do you have a policy on AI usage in your class?</h4>
							Conversely, most educators report that they do not have a policy
							for the use of generative AI in their classes, with only a few
							educators reporting that they do have a policy.
						</p>
					</span>
					<div className='research-charts charts-policies'>
						<Pie
							data={[
								{
									value: 4,
									label: 'Allowed with no limitations',
								},
								{
									value: 2,
									label: 'Allowed with citation',
								},
								{
									value: 40,
									label: 'Limited Usage',
								},
								{
									value: 3,
									label: 'Allowed to study/research',
								},
								{
									value: 34,
									label: 'Not Allowed',
								},
							]}
						/>
						<p className='results-text'>
							<h4>
								What is the AI policy in your class? (Students & Educators)
							</h4>
							Out of those that report having a policy, most allow it in some
							form. Few are allowed with no limitations, or with citations only.
							Most are allowed with limitations, or only for studying and
							research, and a large number are not allowed at all.
						</p>
					</div>

					<h2 className='results-subtitle'>Student Scenarios</h2>
					<p className='results-text'>
						For those who took the survey, and were not students, they were
						asked to share their opinions on how they would feel if a student
						were to use generative AI to do various tasks. The results are as
						follows:
					</p>
					<div className='research-charts charts-policies'>
						<Bar data={[40, 21, 8, 2, 3]} />
						<p className='results-text'>
							<h4>A student uses AI to write an essay.</h4>
							Most participants would not be okay with a student using AI to
							write an essay, but a few would be okay with it.
						</p>
					</div>
					<div className='research-charts charts-policies'>
						<Bar data={[12, 14, 16, 17, 15]} />
						<p className='results-text'>
							<h4>A student uses AI to write an outline for an essay.</h4>
							For this scenario, the results are fairly even, with a significant
							number of participants saying that they would not be okay with a
							student using AI to write an outline, but with a large number
							saying that they would be okay with it.
						</p>
					</div>
					<div className='research-charts charts-policies'>
						<Bar data={[4, 6, 18, 21, 5]} />
						<p className='results-text'>
							<h4>A student uses AI to come up with a topic for an essay.</h4>
							Almost all participants were either neutral or would be okay with
							a student using AI to come up with a topic for an essay, with a
							few outliers.
						</p>
					</div>
					<div className='research-charts charts-policies'>
						<Bar data={[10, 9, 13, 22, 19]} />
						<p className='results-text'>
							<h4>A student uses AI to research a topic for an essay.</h4>
							Once again, the results are fairly even, but a majority of
							participants would be okay with a student using AI for research.
						</p>
					</div>
					<div className='research-charts charts-policies'>
						<Bar data={[1, 10, 9, 23, 31]} />
						<p className='results-text'>
							<h4>
								A student uses AI to re-learn a topic they did not understand
								from a lecture.
							</h4>
							Most participants agree that a student should be allowed to use AI
							for educational purposes, with only one participant stating that
							they would strongly oppose it.
						</p>
					</div>
					<h2 className='results-subtitle'>Educator Scenarios</h2>
					<p className='results-text'>
						For those who took the survey, and were not educators, they were
						asked to share their opinions on how they would feel if an educator
						were to use generative AI to do various tasks. The results are as
						follows:
					</p>
					<div className='research-charts charts-policies'>
						<Bar data={[21, 29, 29, 20, 20]} />
						<p className='results-text'>
							<h4>A teacher uses AI to create a lesson plan for a lecture.</h4>
							While the results are fairly even, a majority of participants feel
							that a teacher should not be allowed to use AI to create a lesson
							plan.
						</p>
					</div>
					<div className='research-charts charts-policies'>
						<Bar data={[24, 20, 31, 23, 21]} />
						<p className='results-text'>
							<h4>A teacher uses AI to create an assignment for a lecture.</h4>
							Once again, the results are fairly even, but a majority of
							participants feel that a teacher should be allowed to use AI to
							create an assignment.
						</p>
					</div>
					<div className='research-charts charts-policies'>
						<Bar data={[58, 28, 12, 8, 12]} />
						<p className='results-text'>
							<h4>A teacher uses AI to grade an assignment from a student.</h4>
							This time, the results lean more towards not allowing a teacher to
							use AI to grade assignments, with a large majority of participants
							strongly opposing it.
						</p>
					</div>
					<div className='research-charts charts-policies'>
						<Bar data={[21, 20, 29, 23, 26]} />
						<p className='results-text'>
							<h4>
								A teacher uses AI to learn a new topic that they will present in
								a lecture.
							</h4>
							Once again, the results are fairly even, but a majority of
							participants feel that a teacher should be allowed to use AI to
							learn something new to later present in a lecture.
						</p>
					</div>
				</span>
			</div>
		</div>
	);
}

export default ResultsScreen;

function Pie(props: { data: any; scale?: number }) {
	return (
		<PieChart
			colors={[
				// '#696EFF',
				'#8178FF',
				'#9983FF',
				'#B18DFF',
				'#C897FF',
				'#E0A2FF',
				'#F8ACFF',
			]}
			series={[
				{
					data: props.data,
					innerRadius: 50 * (props.scale || 1),
					outerRadius: 110 * (props.scale || 1),
					paddingAngle: 3.5 * (props.scale || 1),
					cornerRadius: 5 * (props.scale || 1),
					startAngle: 90,
					endAngle: 360 + 90,
					highlightScope: { faded: 'global', highlighted: 'item' },
					arcLabel: (d: any) => {
						return d.label;
					},
					arcLabelRadius: 110 * (props.scale || 1),
					cx: 140 * (props.scale || 1),
					arcLabelMinAngle: 30 * (props.scale || 1),
				},
			]}
			sx={{
				'& .MuiPieArcLabel-root': {
					fill: 'white',
					stroke: 'white',
					strokeWidth: 0.5,
				},
				'& .MuiPieArc-root': {
					stroke: 'none',
				},
				'&': {
					// backgroundColor: 'blue',
				},
			}}
			slotProps={{
				legend: {
					hidden: true,
				},
			}}
			width={300 * (props.scale || 1)}
			height={300 * (props.scale || 1)}
		/>
	);
}

function Bar(props: { data: any }) {
	return (
		<BarChart
			colors={['#b075eb']}
			xAxis={[
				{
					scaleType: 'band',
					data: ['Strongly Disagree', ' ', 'Neutral', '', 'Strongly Agree'],
				},
			]}
			series={[
				{
					data: props.data,
					// highlightScope: { faded: 'global', highlighted: 'item' },
				},
			]}
			sx={{
				'& .MuiChartsAxis-line': {
					stroke: 'white',
				},
				'& .MuiChartsAxis-tick': {
					stroke: 'white',
				},
				'& .MuiChartsAxis-tickLabel': {
					fill: 'white',
					stroke: 'white',
					strokeWidth: 0.5,
				},
			}}
			width={350}
			height={300}
		/>
	);
}
